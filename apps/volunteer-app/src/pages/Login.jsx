import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
 dev

dev
 main
import { useLanguage } from "../context/LanguageContext";

function Login() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
 dev


 feature/data-sync

function Login() {
  const navigate = useNavigate();

import { useLanguage } from "../context/LanguageContext";

function Login() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
 main
 main
 main
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
 dev

 dev

 feature/data-sync
      await confirmation.confirm(otp);

 main
 main
 main
      navigate("/dashboard");
    } catch (error) {
      console.error("OTP Verify Error:", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

 dev

 dev
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


 feature/data-sync
 main
  return (
    <div className="auth-card">
      {/* Language Toggle */}
      <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
        <button onClick={() => setLanguage('en')} style={langBtnStyle('en')}>English</button>
        <button onClick={() => setLanguage('te')} style={langBtnStyle('te')}>తెలుగు</button>
        <button onClick={() => setLanguage('hi')} style={langBtnStyle('hi')}>हिंदी</button>
      </div>

      <div>
 dev
        <h1 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{t.appTitle}</h1>
        <h3>{t.loginSubtitle}</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.enterMobile}</p>

        <h1 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Councillor Campaign</h1>
        <h3>Volunteer Login</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Enter your mobile number to access the volunteer dashboard.</p>

 main
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
 dev

 main
 main
 main
      </div>

      {!confirmation ? (
        <div className="input-group">
 dev
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

 dev
          <label className="input-label" htmlFor="phone">{t.phoneLabel}</label>

 feature/data-sync
          <label className="input-label" htmlFor="phone">Mobile Number</label>
 main
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
 main
 main
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
 dev
            {loading ? t.verifying : t.verify}

 dev
            {loading ? t.verifying : t.verify}

 feature/data-sync
            {loading ? "Verifying..." : "Verify & Login"}
 main
 main
          </button>
          <button type="button" className="btn-secondary" onClick={() => setConfirmation(null)} style={{ marginTop: '0.5rem', width: '100%' }}>
            {t.changeNumber}
          </button>
 dev


            {loading ? t.verifying : t.verify}
          </button>
          <button type="button" className="btn-secondary" onClick={() => setConfirmation(null)} style={{ marginTop: '0.5rem', width: '100%' }}>
            {t.changeNumber}
          </button>
 main
 main
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
