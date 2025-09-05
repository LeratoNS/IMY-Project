// Lerato Sibanda u22705504 P-14
import { useState } from 'react';

export default function CreateProject({ onCreate, onCancel }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState('');
  const [messages, setMessages] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || description.length < 10) return;

    const newProject = {
      id: `p${Math.random().toString(36).slice(2, 7)}`,
      name: name.trim(),
      description: description.trim(),
      files: files.split('\n').map(file => file.trim()).filter(file => file),
      messages: messages.split('\n').map(msg => msg.trim()).filter(msg => msg),
      createdAt: new Date().toISOString()
    };

    onCreate?.(newProject);
    // Reset form
    setName('');
    setDescription('');
    setFiles('');
    setMessages('');
  }

  const isFormValid = name.trim().length >= 2 && description.trim().length >= 10;

  return (
    <div className="card grid" style={{ marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h3 style={{ margin: 0 }}>Create New Project</h3>
        <button
          type="button"
          className="button"
          onClick={onCancel}
          style={{ background: "#6b7280", padding: "0.5rem 1rem" }}
        >
          × Cancel
        </button>
      </div>

      <form onSubmit={submit} className="grid" style={{ gap: "1rem" }}>
        {/* Project Name */}
        <div>
          <label htmlFor="project-name" style={{ display: "block", marginBottom: "0.5rem", color: "#e2e8f0" }}>
            Project Name *
          </label>
          <input
            id="project-name"
            className="input"
            placeholder="e.g., Gamma"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            minLength={2}
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="project-description" style={{ display: "block", marginBottom: "0.5rem", color: "#e2e8f0" }}>
            Description *
          </label>
          <textarea
            id="project-description"
            className="input"
            rows="3"
            placeholder="e.g., A full-stack application (minimum 10 characters)"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            minLength={10}
          ></textarea>
        </div>

        {/* Files */}
        <div>
          <label htmlFor="project-files" style={{ display: "block", marginBottom: "0.5rem", color: "#e2e8f0" }}>
            Files (one per line)
          </label>
          <textarea
            id="project-files"
            className="input"
            rows="3"
            placeholder="client.js&#10;server.js&#10;database.js"
            value={files}
            onChange={e => setFiles(e.target.value)}
            style={{ fontFamily: 'monospace' }}
          ></textarea>
          <small style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
            Enter one file name per line
          </small>
        </div>

        {/* Messages */}
        <div>
          <label htmlFor="project-messages" style={{ display: "block", marginBottom: "0.5rem", color: "#e2e8f0" }}>
            Messages (one per line)
          </label>
          <textarea
            id="project-messages"
            className="input"
            rows="3"
            placeholder="Project started&#10;Added database connection"
            value={messages}
            onChange={e => setMessages(e.target.value)}
            style={{ fontFamily: 'monospace' }}
          ></textarea>
          <small style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
            Enter one message per line
          </small>
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1rem" }}>
          <button
            type="submit"
            className="button"
            disabled={!isFormValid}
            style={{ minWidth: "120px" }}
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}