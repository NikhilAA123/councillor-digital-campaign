import { openDB } from 'idb';

const DB_NAME = 'campaign_db';
const DB_VERSION = 1;
const STORE_NAME = 'voters';

export const initDB = async () => {
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        },
    });
};

export const addVoter = async (voterData) => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const result = await store.add({
        ...voterData,
        createdAt: new Date().toISOString(),
        synced: false,
    });
    await tx.done;
    return result;
};

export const getAllVoters = async () => {
    const db = await initDB();
    return db.getAll(STORE_NAME);
};

export const countVoters = async () => {
    const db = await initDB();
    return db.count(STORE_NAME);
};
