import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
 feature/data-sync
import { useEffect, useState } from "react";
import { countVoters } from "../utils/db";
import { syncOfflineData } from "../utils/syncService";

 feature/localization
import { useLanguage } from "../context/LanguageContext";
import { countVoters } from "../utils/db";
import { syncOfflineData } from "../utils/syncService";

feature/offline-voter-form
import { countVoters } from "../utils/db";

import { useEffect, useState } from "react";
import { countVoters } from "../utils/db";
import { syncOfflineData } from "../utils/syncService";
 dev
 dev
 main

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
feature/data-sync

 feature/localization
    const { t } = useLanguage(); // Using language context

 dev
 main
    const [stats, setStats] = useState({ local: 0, synced: 0 });

    useEffect(() => {
        const loadStats = async () => {
            const localCount = await countVoters();
            setStats(prev => ({ ...prev, local: localCount }));
 feature/data-sync

 feature/localization

 feature/offline-voter-form
        };
        loadStats();
    }, []);

 dev
 main

            // Auto-sync on load
            if (currentUser && navigator.onLine) {
                try {
                    const result = await syncOfflineData(currentUser.uid);
                    if (result.added > 0) {
                        // Refresh stats after sync
                        const newLocalCount = await countVoters();
                        setStats(prev => ({ ...prev, local: newLocalCount, synced: prev.synced + result.added }));
                        alert(`Synced ${result.added} voters to cloud!`);
                    }
                } catch (e) {
                    console.error("Auto-sync failed:", e);
                }
            }
        };
        loadStats();
    }, [currentUser]);
 feature/data-sync

 feature/localization

dev
 dev
 main

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <div className="auth-card" style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem' }}>
 feature/data-sync
                <h2 style={{ fontSize: '1.5rem' }}>Dashboard</h2>

                <h2 style={{ fontSize: '1.5rem' }}>{t.dashboardTitle}</h2>
 main
                <div style={{ width: '32px', height: '32px', background: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                    {currentUser?.phoneNumber ? currentUser.phoneNumber.slice(-2) : 'V'}
                </div>
            </div>

            <div style={{ background: 'var(--background-color)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
 feature/data-sync
                <p style={{ margin: 0, fontSize: '0.85rem' }}>Welcome back,</p>
                <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-main)' }}>{currentUser?.phoneNumber}</p>
                <div style={{ marginTop: '0.5rem', display: 'inline-block', padding: '0.25rem 0.5rem', background: '#DCFCE7', color: '#166534', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>
                    Active Volunteer

                <p style={{ margin: 0, fontSize: '0.85rem' }}>{t.welcome}</p>
                <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-main)' }}>{currentUser?.phoneNumber}</p>
                <div style={{ marginTop: '0.5rem', display: 'inline-block', padding: '0.25rem 0.5rem', background: '#DCFCE7', color: '#166534', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>
                    {t.activeVolunteer}
 main
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>{stats.local}</h3>
 feature/data-sync

 feature/localization
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>{t.votersAdded}</p>
                </div>
                <div style={{ background: '#FFF7ED', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--secondary-color)', fontSize: '1.5rem' }}>{stats.synced}</h3>
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>{t.pendingSync}</p>

 main
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Voters Added</p>
                </div>
                <div style={{ background: '#FFF7ED', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--secondary-color)', fontSize: '1.5rem' }}>{stats.synced}</h3>
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Pending Sync</p>
 feature/data-sync

 dev
main
                </div>
            </div>

            <button
                onClick={() => navigate('/add-voter')}
                className="btn-primary"
                style={{ marginBottom: '1rem' }}
            >
 feature/data-sync

 feature/localization
                {t.addNewVoter}
            </button>

            <button onClick={handleLogout} className="btn-secondary" style={{ width: '100%', borderColor: '#EF4444', color: '#EF4444' }}>
                {t.logout}

 main
                + Add New Voter
            </button>

            <button onClick={handleLogout} className="btn-secondary" style={{ width: '100%', borderColor: '#EF4444', color: '#EF4444' }}>
                Logout
feature/data-sync

 dev
main
            </button>
        </div>
    );
};

export default Dashboard;
