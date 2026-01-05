import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Using Email/Pass for Admin for now, or Phone if preferred.
// Actually, plan said "Simple Login page (hardcoded admin check)". 
// But we should use Firebase Auth. Let's stick to Phone Auth for consistency or Email if Admin was set up.
// For NOW, let's use a simple HARDCODED PIN check + Phone Auth Mock or just reuse Phone Auth from volunteer app?
// Plan: "Admin Auth: Simple Login page (hardcoded admin check for MVP)."
// Implementation: Login with Phone -> Check if Phone == "ADMIN_PHONE" -> Allow.
// Let's implement Phone Login but restrict access.

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

// Hardcoded Admin Whitelist (In real app, moving to Firestore/Claims)
const ADMIN_PHONES = ["+919876543210"]; // Replace with Real Admin Number later

const AdminLogin = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendOtp = async () => {
        if (!ADMIN_PHONES.includes(phone)) {
            // Fake it or Alert
            // For MVP, strict alert is safer
            alert("Access Denied: You are not an Admin.");
            return;
        }

        try {
            setLoading(true);
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
            }
            const confirmationResult = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
            setConfirmation(confirmationResult);
        } catch (error) {
            console.error(error);
            alert("Error sending OTP");
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        try {
            setLoading(true);
            await confirmation.confirm(otp);
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', color: '#111827', marginBottom: '0.5rem' }}>Admin Portal</h2>
                <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem', fontSize: '0.9rem' }}>Campaign Management System</p>

                {!confirmation ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="tel"
                            placeholder="Admin Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db' }}
                        />
                        <button
                            onClick={sendOtp}
                            disabled={loading}
                            style={{ padding: '0.75rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
                        >
                            {loading ? "Verifying..." : "Login"}
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', textAlign: 'center', letterSpacing: '0.5rem' }}
                        />
                        <button
                            onClick={verifyOtp}
                            disabled={loading}
                            style={{ padding: '0.75rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
                        >
                            {loading ? "Checking..." : "Verify Access"}
                        </button>
                    </div>
                )}
                <div id="recaptcha-container"></div>
            </div>
        </div>
    );
};

export default AdminLogin;
