// Lerato Sibanda u22705504 P-14
import { Link } from 'react-router-dom';

export default function ProjectPreview({ project }) {
    console.log("Project preview:", project); // Debug log

    return (
        <article className="card">
            <h3 style={{ margin: '0 0 .5rem 0', color: '#e2e8f0' }}>{project.name}</h3>
            <p style={{ margin: '0 0 1rem 0', opacity: 0.9, color: '#cbd5e1' }}>{project.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Files: {project.files.length} • Messages: {project.messages.length}
                </span>
                <Link to={`/project/${project.id}`} className="button" style={{ padding: '0.5rem 1rem' }}>
                    View Project
                </Link>
            </div>
        </article>
    );
}