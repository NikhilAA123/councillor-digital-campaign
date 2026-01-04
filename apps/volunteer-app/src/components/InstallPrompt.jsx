import { useState, useEffect } from 'react';

const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            // Update UI notify the user they can install the PWA
            setShowPrompt(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '90%',
            maxWidth: '400px',
        }}>
            <span style={{ flex: 1, fontSize: '0.9rem' }}>Install App for easier access!</span>
            <button
                onClick={handleInstallClick}
                style={{
                    backgroundColor: 'white',
                    color: 'var(--primary-color)',
                    border: 'none',
                    padding: '6px 16px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Install
            </button>
            <button
                onClick={() => setShowPrompt(false)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    padding: '0 5px'
                }}
            >
                ×
            </button>
        </div>
    );
};

export default InstallPrompt;
