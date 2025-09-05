// Lerato Sibanda u22705504 P-14
import ProjectPreview from '../ProjectPreview.js';

export default function UserProjectsList({ projects }) {
    console.log("Rendering projects:", projects); // Debug log

    return (
        <div className="grid" style={{ gap: "1rem" }}>
            {projects.map(project => (
                <ProjectPreview key={project.id} project={project} />
            ))}
        </div>
    );
}