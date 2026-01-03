import { collection, query, where, getDocs, writeBatch, doc } from "firebase/firestore";
import { db } from "../config/firebase"; // Assuming you have a firestore instance exported as 'db'
import { getAllVoters, initDB } from "./db";

const BATCH_SIZE = 450; // Firestore batch limit is 500, keeping safety margin

/**
 * Checks if a voter with the given phone number already exists in Firestore.
 * @param {string} phone - The phone number to check.
 * @returns {Promise<boolean>} - True if exists, False otherwise.
 */
export const checkDuplicateVoter = async (phone) => {
    try {
        const votersRef = collection(db, "voters");
        const q = query(votersRef, where("phone", "==", phone));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    } catch (error) {
        console.error("Error checking duplicate:", error);
        return false; // Fail safe, allow add if offline/error (server will handle dedup eventually)
    }
};

/**
 * Syncs unsynced local voters to Firestore.
 * @param {string} volunteerId - The UID of the current volunteer.
 * @returns {Promise<{added: number, errors: number}>}
 */
export const syncOfflineData = async (volunteerId) => {
    if (!navigator.onLine) return { added: 0, errors: 0 };

    const localVoters = await getAllVoters();
    const unsyncedVoters = localVoters.filter(v => !v.synced);

    if (unsyncedVoters.length === 0) return { added: 0, errors: 0 };

    let addedCount = 0;
    const batch = writeBatch(db);
    const idb = await initDB();
    const tx = idb.transaction('voters', 'readwrite');
    const store = tx.objectStore('voters');

    // Process in chunks if needed, here we do one batch for simplicity of Day 4 MVP
    // For 10k scale, this function would likely be called repeatedly or manage multiple batches
    const chunk = unsyncedVoters.slice(0, BATCH_SIZE);

    chunk.forEach((voter) => {
        const newDocRef = doc(collection(db, "voters")); // Auto-ID
        batch.set(newDocRef, {
            ...voter,
            volunteerId: volunteerId,
            syncedAt: new Date().toISOString(),
            status: 'pending' // Default status
        });

        // Prepare local update (delete old, add new as synced?) 
        // Or just update the 'synced' flag. IDB update:
        // We'll update IDB after successful batch commit logic is complex in one pass.
        // For now, let's assume valid write.
    });

    try {
        await batch.commit();

        // If successful, update local IDB to synced=true
        for (const voter of chunk) {
            await store.put({ ...voter, synced: true });
        }
        await tx.done;

        return { added: chunk.length, errors: 0 };
    } catch (error) {
        console.error("Batch Sync Failed:", error);
        return { added: 0, errors: chunk.length };
    }
};
