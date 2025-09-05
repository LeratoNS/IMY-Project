// Lerato Sibanda u22705504 P-14
import { useState } from 'react';
import { mockUsers } from '../../data/mock.js';

export default function EditProjectForm({ project, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: project.name || '',
        description: project.description || '',
        files: project.files ? project.files.join('\n') : '',
        messages: project.messages ? project.messages.join('\n') : ''
    });

    const valid = formData.name.trim().length >= 2 &&
        formData.description.trim().length >= 10;

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

        const updatedProject = {
            ...project,
            name: formData.name,
            description: formData.description,
            files: formData.files.split('\n').map(file => file.trim()).filter(file => file),
            messages: formData.messages.split('\n').map(msg => msg.trim()).filter(msg => msg)
        };

        onSave?.(updatedProject);
    }

    const owner = mockUsers.find(user => user.id === project.owner);

    return (
        <form className="card grid" onSubmit={submit} style={{ gap: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>Edit Project</h3>

            {/* Show owner information */}
            {owner && (
                <div style={{
                    padding: "0.75rem",
                    background: "#1e293b",
                    borderRadius: "8px",
                    marginBottom: "1rem"
                }}>
                    <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.9rem" }}>
                        👤 You are editing your project
                    </p>
                </div>
            )}

            <div>
                <label htmlFor="name">Project Name *</label>
                <input
                    id="name"
                    name="name"
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    style={{ width: "100%" }}
                />
            </div>

            <div>
                <label htmlFor="description">Description *</label>
                <textarea
                    id="description"
                    name="description"
                    className="input"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    minLength={10}
                    style={{ width: "100%" }}
                ></textarea>
            </div>

            <div>
                <label htmlFor="files">Files (one per line)</label>
                <textarea
                    id="files"
                    name="files"
                    className="input"
                    rows="4"
                    value={formData.files}
                    onChange={handleChange}
                    placeholder="README.md&#10;index.js&#10;styles.css"
                    style={{ width: "100%", fontFamily: 'monospace' }}
                ></textarea>
            </div>

            <div>
                <label htmlFor="messages">Messages (one per line)</label>
                <textarea
                    id="messages"
                    name="messages"
                    className="input"
                    rows="4"
                    value={formData.messages}
                    onChange={handleChange}
                    placeholder="Initial commit&#10;Added login functionality&#10;Fixed styling issues"
                    style={{ width: "100%", fontFamily: 'monospace' }}
                ></textarea>
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