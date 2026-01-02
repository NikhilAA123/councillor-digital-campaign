import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVoter } from '../utils/db'; // We'll make sure this path is correct

const VoterForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        ward: '',
        issue: '',
    });

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
                <h2 style={{ fontSize: '1.5rem' }}>Add Voter</h2>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="input-group">
                    <label className="input-label" htmlFor="name">Voter Name *</label>
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
                        required
                    />
                </div>

                <div className="input-group">
                    <label className="input-label" htmlFor="ward">Ward / Area *</label>
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
                    <label className="input-label" htmlFor="issue">Main Issue (Optional)</label>
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
                    {loading ? "Saving..." : "Save Voter Offline"}
                </button>
            </form>
        </div>
    );
};

export default VoterForm;
