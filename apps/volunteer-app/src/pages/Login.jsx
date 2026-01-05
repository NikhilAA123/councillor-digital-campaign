import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Login() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
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
      // alert("OTP sent successfully");
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
      navigate("/dashboard");
    } catch (error) {
      console.error("OTP Verify Error:", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const langBtnStyle = (lang) => ({
    flex: 1,
    padding: '0.5rem',
    border: '1px solid var(--border-color)',
    background: language === lang ? 'var(--primary-color)' : 'white',
    color: language === lang ? 'white' : 'var(--text-main)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600'
  });

  return (
    <div className="auth-card">
      {/* Language Toggle */}
      <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
        <button onClick={() => setLanguage('en')} style={langBtnStyle('en')}>English</button>
        <button onClick={() => setLanguage('te')} style={langBtnStyle('te')}>తెలుగు</button>
        <button onClick={() => setLanguage('hi')} style={langBtnStyle('hi')}>हिंदी</button>
      </div>

      <div>
        <h1 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{t.appTitle}</h1>
        <h3>{t.loginSubtitle}</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.enterMobile}</p>
      </div>

      {!confirmation ? (
        <div className="input-group">
          <label className="input-label" htmlFor="phone">{t.phoneLabel}</label>
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
            {loading ? t.sending : t.sendCode}
          </button>
        </div>
      ) : (
        <div className="input-group">
          <label className="input-label" htmlFor="otp">{t.enterOtp}</label>
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
            {loading ? t.verifying : t.verify}
          </button>
          <button type="button" className="btn-secondary" onClick={() => setConfirmation(null)} style={{ marginTop: '0.5rem', width: '100%' }}>
            {t.changeNumber}
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
