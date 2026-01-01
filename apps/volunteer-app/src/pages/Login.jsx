import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../config/firebase";

function Login() {
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
      alert("Login successful");
    } catch (error) {
      console.error("OTP Verify Error:", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "360px", margin: "auto" }}>
      <h3>Volunteer Login</h3>

      <input
        type="tel"
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />

      <button
        onClick={sendOtp}
        disabled={loading}
        style={{ width: "100%", padding: "8px" }}
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>

      {confirmation && (
        <>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "10px" }}
          />

          <button
            onClick={verifyOtp}
            disabled={loading}
            style={{ width: "100%", padding: "8px", marginTop: "8px" }}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}

      {/* Required for Firebase reCAPTCHA */}
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default Login;
