// Lerato Sibanda u22705504 P-14
import { useState } from 'react';

export default function EditProfileForm({ user, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: user.name || '',
        username: user.username || '',
        bio: user.bio || '',
        birthday: user.birthday || '',
        work: user.work || '',
        contact: user.contact || '',
        languages: user.languages ? user.languages.join(', ') : ''
    });

    const valid = formData.name.trim().length >= 3 &&
        formData.username.trim().length >= 2 &&
        formData.bio.trim().length >= 5;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function submit(e) {
        e.preventDefault();
        if (!valid) return;

        const updatedUser = {
            ...user,
            name: formData.name,
            username: formData.username,
            bio: formData.bio,
            birthday: formData.birthday,
            work: formData.work,
            contact: formData.contact,
            languages: formData.languages.split(',').map(lang => lang.trim()).filter(lang => lang)
        };

        onSave?.(updatedUser);
    }

    return (
        <form className="card grid" onSubmit={submit} style={{ gap: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>Edit Profile</h3>

            <div>
                <label htmlFor="name">Full Name *</label>
                <input
                    id="name"
                    name="name"
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={3}
                    style={{ width: "100%" }}
                />
            </div>

            <div>
                <label htmlFor="username">Username *</label>
                <input
                    id="username"
                    name="username"
                    className="input"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    minLength={2}
                    style={{ width: "100%" }}
                />
            </div>

            <div>
                <label htmlFor="bio">Bio *</label>
                <textarea
                    id="bio"
                    name="bio"
                    className="input"
                    rows="3"
                    value={formData.bio}
                    onChange={handleChange}
                    required
                    minLength={5}
                    style={{ width: "100%" }}
                ></textarea>
            </div>

            <div>
                <label htmlFor="birthday">Birthday</label>
                <input
                    id="birthday"
                    name="birthday"
                    type="date"
                    className="input"
                    value={formData.birthday}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                />
            </div>

            <div>
                <label htmlFor="work">Work</label>
                <input
                    id="work"
                    name="work"
                    className="input"
                    value={formData.work}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                />
            </div>

            <div>
                <label htmlFor="contact">Contact Email</label>
                <input
                    id="contact"
                    name="contact"
                    type="email"
                    className="input"
                    value={formData.contact}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                />
            </div>

            <div>
                <label htmlFor="languages">Languages (comma-separated)</label>
                <input
                    id="languages"
                    name="languages"
                    className="input"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="JavaScript, Python, React"
                    style={{ width: "100%" }}
                />
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <button
                    type="button"
                    className="button"
                    onClick={onCancel}
                    style={{ background: "#6b7280", flex: 1 }}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="button"
                    disabled={!valid}
                    style={{ flex: 1 }}
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}