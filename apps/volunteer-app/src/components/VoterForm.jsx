import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 dev
 feature/voter-crm-update

 feature/admin-dashboard
import { addVoter } from '../utils/db';
import { checkDuplicateVoter } from '../utils/syncService'; // We'll make sure this path is correct

const VoterForm = () => {

 main
 feature/voter-crm-update

 dev
 main
dev

 dev
 dev

 main
import { addVoter } from '../utils/db';
import { checkDuplicateVoter } from '../utils/syncService';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const VoterForm = () => {
    const { language } = useLanguage();
    const t = translations[language];
 feature/voter-crm-update
 dev
 feature/voter-crm-update


 dev



 main
 dev

 feature/data-sync
import { addVoter } from '../utils/db';
import { checkDuplicateVoter } from '../utils/syncService'; // We'll make sure this path is correct


 main
 feature/localization
import { addVoter } from '../utils/db';
import { checkDuplicateVoter } from '../utils/syncService'; // We'll make sure this path is correct

 feature/offline-voter-form
import { addVoter } from '../utils/db'; // We'll make sure this path is correct

import { addVoter } from '../utils/db';
import { checkDuplicateVoter } from '../utils/syncService'; // We'll make sure this path is correct
 dev
dev

 main
const VoterForm = () => {
main
 dev
 feature/voter-crm-update
 main

 dev

 main
 main
 main
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        ward: '',
 dev
 feature/voter-crm-update

 feature/admin-dashboard
        issue: '',
    });

 main
 feature/voter-crm-update

dev
 main
 dev

dev
 dev

 main
        booth: '',
        supportStatus: '',
        issue: '',
    });
 feature/voter-crm-update
 dev
 feature/voter-crm-update

 dev


 main

        issue: '',
    });
 dev

 feature/data-sync

main
 feature/localization

 feature/offline-voter-form

 dev
 dev

 main
 main
 main
 dev
 feature/voter-crm-update
 main

 dev

 main
 main
 main
    const [duplicateWarning, setDuplicateWarning] = useState(null);

    const checkPhone = async () => {
        if (formData.phone.length >= 10) {
            const isDuplicate = await checkDuplicateVoter(formData.phone);
            if (isDuplicate) {
                setDuplicateWarning("⚠️ This voter is already in the central database.");
            } else {
                setDuplicateWarning(null);
            }
        }
    };
 dev
 feature/voter-crm-update
 feature/voter-crm-update


 dev
 dev

 feature/admin-dashboard

 feature/voter-crm-update

 dev
 main

 dev

 feature/data-sync

 main
feature/localization

dev
 dev
 dev

 main
 main
 main
 dev
feature/voter-crm-update
 main
dev

 main
 main
 main

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.ward) {
            alert("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        try {
            await addVoter(formData);
            alert("Voter saved locally!");
            navigate('/dashboard');
        } catch (error) {
            console.error("Error saving voter:", error);
            alert("Failed to save voter. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-card" style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <button
                    onClick={() => navigate('/dashboard')}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0 0.5rem 0 0',
                        marginRight: '0.5rem',
                        color: 'var(--text-secondary)'
                    }}
                >
                    ←
                </button>
 dev
 feature/voter-crm-update
feature/voter-crm-update
                <h2 style={{ fontSize: '1.5rem' }}>{t.addVoterTitle}</h2>

 dev
                <h2 style={{ fontSize: '1.5rem' }}>{t.addVoterTitle}</h2>

                <h2 style={{ fontSize: '1.5rem' }}>Add Voter</h2>
 main
 main

 feature/admin-dashboard
                <h2 style={{ fontSize: '1.5rem' }}>Add Voter</h2>

feature/voter-crm-update
                <h2 style={{ fontSize: '1.5rem' }}>{t.addVoterTitle}</h2>
 main

 dev
                <h2 style={{ fontSize: '1.5rem' }}>{t.addVoterTitle}</h2>

                <h2 style={{ fontSize: '1.5rem' }}>Add Voter</h2>
 main
 dev
 dev

 main
 main
 main
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="input-group">
 dev
 feature/voter-crm-update
 feature/voter-crm-update
                    <label className="input-label" htmlFor="name">{t.voterName} *</label>


 dev
 dev
                    <label className="input-label" htmlFor="name">{t.voterName} *</label>

                    <label className="input-label" htmlFor="name">Voter Name *</label>
 main
feature/voter-crm-update
 main

 dev

 feature/admin-dashboard
                    <label className="input-label" htmlFor="name">Voter Name *</label>

 feature/voter-crm-update
                    <label className="input-label" htmlFor="name">{t.voterName} *</label>

 dev
                    <label className="input-label" htmlFor="name">{t.voterName} *</label>

                    <label className="input-label" htmlFor="name">Voter Name *</label>
 main
 main
 main
 main
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="phone">Phone Number *</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
 dev
 feature/voter-crm-update
 feature/voter-crm-update


 dev

 feature/admin-dashboard

 feature/voter-crm-update
 main
dev

 dev

 feature/data-sync

 main
 feature/localization

 feature/offline-voter-form
                        required
                    />

 dev
 dev

 main
 main
 main
 dev
 feature/voter-crm-update
 main

 dev

 main
 main
 main
                        onBlur={checkPhone}
                        required
                    />
                    {duplicateWarning && <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>{duplicateWarning}</p>}
 dev
 feature/voter-crm-update

 feature/admin-dashboard

 main
 feature/voter-crm-update

 dev
 main
 dev

 dev
 dev

 main
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="ward">{t.ward} *</label>
 feature/voter-crm-update
 dev
 feature/voter-crm-update


 dev




 main
 dev

 feature/data-sync

 main
 feature/localization

 dev
 dev
 main
 main
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="ward">Ward / Area *</label>
 dev
main
 feature/voter-crm-update
 main

dev

 feature/admin-dashboard

main
 main
 main
 main
                    <input
                        id="ward"
                        name="ward"
                        type="text"
                        placeholder="e.g. Ward 12"
                        value={formData.ward}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
 dev
 feature/voter-crm-update
 feature/voter-crm-update

 dev
 main

 dev
 dev
                    <label className="input-label" htmlFor="booth">{t.booth}</label>
                    <input
                        id="booth"
                        name="booth"
                        type="text"
                        placeholder="e.g. 12A"
                        value={formData.booth}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="supportStatus">{t.supportStatus} *</label>
                    <select
                        id="supportStatus"
                        name="supportStatus"
                        value={formData.supportStatus}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            fontSize: '1rem',
                            backgroundColor: 'white',
                            outline: 'none'
                        }}
                    >
                        <option value="">Select status...</option>
                        <option value="supporter">{t.statusOptions.supporter}</option>
                        <option value="undecided">{t.statusOptions.undecided}</option>
                        <option value="opposer">{t.statusOptions.opposer}</option>
                    </select>
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="issue">{t.mainIssue}</label>
 feature/voter-crm-update
 feature/voter-crm-update


                    <label className="input-label" htmlFor="issue">Main Issue (Optional)</label>
main
 main


                    <label className="input-label" htmlFor="issue">Main Issue (Optional)</label>
main
 dev

 feature/admin-dashboard
                    <label className="input-label" htmlFor="issue">Main Issue (Optional)</label>

 feature/voter-crm-update

 dev
 main
                    <label className="input-label" htmlFor="booth">{t.booth}</label>
                    <input
                        id="booth"
                        name="booth"
                        type="text"
                        placeholder="e.g. 12A"
                        value={formData.booth}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="supportStatus">{t.supportStatus} *</label>
                    <select
                        id="supportStatus"
                        name="supportStatus"
                        value={formData.supportStatus}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            fontSize: '1rem',
                            backgroundColor: 'white',
                            outline: 'none'
                        }}
                    >
                        <option value="">Select status...</option>
                        <option value="supporter">{t.statusOptions.supporter}</option>
                        <option value="undecided">{t.statusOptions.undecided}</option>
                        <option value="opposer">{t.statusOptions.opposer}</option>
                    </select>
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="issue">{t.mainIssue}</label>
 feature/voter-crm-update


                    <label className="input-label" htmlFor="issue">Main Issue (Optional)</label>
main
 main
 main
 main
                    <select
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            fontSize: '1rem',
                            backgroundColor: 'white',
                            outline: 'none'
                        }}
                    >
                        <option value="">Select an issue...</option>
                        <option value="Roads">Road Maintenance</option>
                        <option value="Water">Water Supply</option>
                        <option value="Electricity">Electricity/Street Lights</option>
                        <option value="Sanitation">Sanitation/Garbage</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ marginTop: '1rem' }}
                >
 dev
 feature/voter-crm-update
 feature/voter-crm-update

 dev
 dev

 feature/admin-dashboard
                    {loading ? "Saving..." : "Save Voter Offline"}

 feature/voter-crm-update

 dev
 main
                    {loading ? t.saving : t.saveVoter}

                    {loading ? "Saving..." : "Save Voter Offline"}
 main
 dev
 feature/voter-crm-update
 main

 dev

 main
 main
 main
                </button>
            </form>
        </div>
    );
};

export default VoterForm;
