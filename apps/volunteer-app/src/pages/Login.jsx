import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (!phone || !phone.startsWith("+")) {
      alert("Please enter phone number with country code (e.g. +91XXXXXXXXXX)");
      return;
    }

    try {
      setLoading(true);

      // Initialize reCAPTCHA only once
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
          }
        );
      }

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );

      setConfirmation(confirmationResult);
      alert("OTP sent successfully");
    } catch (error) {
      console.error("OTP Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    try {
      setLoading(true);
      await confirmation.confirm(otp);
      await confirmation.confirm(otp);
      navigate("/dashboard");
    } catch (error) {
      console.error("OTP Verify Error:", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div>
        <h1 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Councillor Campaign</h1>
        <h3>Volunteer Login</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Enter your mobile number to access the volunteer dashboard.</p>
      </div>

      {!confirmation ? (
        <div className="input-group">
          <label className="input-label" htmlFor="phone">Mobile Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className="btn-primary"
            onClick={sendOtp}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Verification Code"}
          </button>
        </div>
      ) : (
        <div className="input-group">
          <label className="input-label" htmlFor="otp">Enter Verification Code</label>
          <input
            id="otp"
            type="number"
            placeholder="123456"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ letterSpacing: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}
          />
          <button
            className="btn-primary"
            onClick={verifyOtp}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify & Login"}
          </button>
          <button type="button" className="btn-secondary" onClick={() => setConfirmation(null)} style={{ marginTop: '0.5rem', width: '100%' }}>
            Change Number
          </button>
        </div>
      )}

      {/* Required for Firebase reCAPTCHA */}
      <div id="recaptcha-container"></div>

      <p style={{ fontSize: '0.75rem', marginTop: '1rem' }}>
        Protected by Google reCAPTCHA
      </p>
    </div>
  );
}

export default Login;
