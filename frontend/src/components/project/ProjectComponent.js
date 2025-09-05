// Lerato Sibanda u22705504 P-14
import { mockUsers } from '../../data/mock.js';

export default function ProjectComponent({ project }) {
    const owner = mockUsers.find(user => user.id === project.owner);
    const checkedOutBy = project.checkedOutBy
        ? mockUsers.find(user => user.id === project.checkedOutBy)
        : null;

    return (
        <article className="card">
            <h2 style={{ marginTop: 0 }}>{project.name}</h2>
            <p>{project.description}</p>

            <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
                {owner && (
                    <div>
                        <strong style={{ color: "#e2e8f0" }}>Owner:</strong>
                        <p style={{ margin: "0.25rem 0 0 0", color: "#94a3b8" }}>
                            {owner.name} (@{owner.username})
                        </p>
                    </div>
                )}

                <div>
                    <strong style={{ color: "#e2e8f0" }}>Version:</strong>
                    <p style={{ margin: "0.25rem 0 0 0", color: "#94a3b8" }}>
                        {project.version}
                    </p>
                </div>

                {checkedOutBy && (
                    <div>
                        <strong style={{ color: "#e2e8f0" }}>Status:</strong>
                        <p style={{ margin: "0.25rem 0 0 0", color: "#ef4444" }}>
                            🔒 Checked out by {checkedOutBy.name}
                        </p>
                    </div>
                )}
            </div>
        </article>
    );
}