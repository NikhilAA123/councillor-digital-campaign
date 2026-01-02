import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>
            <p>Welcome, {currentUser?.phoneNumber}</p>
            <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
