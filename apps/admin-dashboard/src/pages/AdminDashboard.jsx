import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate("/");
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f9fafb' }}>
            {/* Sidebar */}
            <aside style={{ width: '250px', background: '#1e293b', color: 'white', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '2rem' }}>Campaign Admin</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="#" style={{ padding: '0.75rem', background: '#334155', borderRadius: '6px', textDecoration: 'none', color: 'white', fontWeight: '500' }}>Dashboard</a>
                    <a href="#" style={{ padding: '0.75rem', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Voters</a>
                    <a href="#" style={{ padding: '0.75rem', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Volunteers</a>
                    <a href="#" style={{ padding: '0.75rem', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Settings</a>
                </nav>
                <div style={{ marginTop: 'auto' }}>
                    <button onClick={handleLogout} style={{ width: '100%', padding: '0.75rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Logout</button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <header style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827' }}>Overview</h1>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                    {/* Stat Cards */}
                    {['Total Voters', 'Active Volunteers', 'Issues Reported', 'Days Remaining'].map((title, i) => (
                        <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{title}</p>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>—</h3>
                        </div>
                    ))}
                </div>

                <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #e5e7eb' }}>
                    <p style={{ color: '#9ca3af' }}>Charts Loading...</p>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
