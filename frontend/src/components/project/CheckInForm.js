// Lerato Sibanda u22705504 P-14
import { useState } from 'react';

export default function CheckInForm({ project, onCheckIn, onCancel }) {
    const [newFiles, setNewFiles] = useState('');
    const [checkinMessage, setCheckinMessage] = useState('');
    const [version, setVersion] = useState(project.version);

    const handleSubmit = (e) => {
        e.preventDefault();

        const filesToAdd = newFiles.split('\n')
            .map(file => file.trim())
            .filter(file => file);

        onCheckIn({
            files: [...project.files, ...filesToAdd],
            messages: [...project.messages, checkinMessage],
            version: version,
            checkedOutBy: null
        });
    };

    return (
        <form className="card grid" onSubmit={handleSubmit} style={{ gap: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>Check In Project</h3>

            <div>
                <label htmlFor="version" style={{ display: "block", marginBottom: "0.5rem", color: "#e2e8f0" }}>
                    Version Number *
                </label>
                <input
                    id="version"
                    type="text"
                    className="input"
                    value={version}
                    onChange={(e) => setVersion(e.target.value)}
                    required
                    placeholder="e.g., 1.1.0"
                    style={{ width: "100%" }}
                />
            </div>

            <div>
                <label htmlFor="newFiles" style={{ display: "block", marginBottom: "0.5rem", color: "#e2e8f0" }}>
                    New Files (one per line)
                </label>
                <textarea
                    id="newFiles"
                    className="input"
                    rows="3"
                    value={newFiles}
                    onChange={(e) => setNewFiles(e.target.value)}
                    placeholder="styles.css&#10;utils.js&#10;config.json"
                    style={{ width: "100%", fontFamily: 'monospace' }}
                />
                <small style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                    Add new files created during this check-out session
                </small>
            </div>

            <div>
                <label htmlFor="checkinMessage" style={{ display: "block", marginBottom: "0.5rem", color: "#e2e8f0" }}>
                    Check-in Message *
                </label>
                <textarea
                    id="checkinMessage"
                    className="input"
                    rows="3"
                    value={checkinMessage}
                    onChange={(e) => setCheckinMessage(e.target.value)}
                    required
                    placeholder="Describe the changes you made during this check-out session..."
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
                    disabled={!checkinMessage.trim() || !version.trim()}
                    style={{ flex: 1 }}
                >
                    Check In
                </button>
            </div>
        </form>
    );
}