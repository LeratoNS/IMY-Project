import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { mockProjects } from '../data/mock.js';
import ProjectComponent from '../components/project/ProjectComponent.js';
import FilesList from '../components/project/FilesList.js';
import MessagesList from '../components/project/MessagesList.js';


export default function Project(){
const { id } = useParams();
const project = mockProjects.find(p => p.id === id) || mockProjects[0];


// return (
// <div className="grid">
// <ProjectComponent project={project} />
// <FilesList files={project.files} />
// <MessagesList messages={project.messages} />
// </div>
// );
// }
return (
    <article className="card">
      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          style={{ maxWidth: "250px", marginBottom: "1rem" }}
        />
      )}

      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Version:</strong> {project.version}</p>

      {project.hashtags?.length > 0 && (
        <p>
          <strong>Languages:</strong>{" "}
          {project.hashtags.map((tag, i) => (
            <span key={i} style={{ marginRight: "0.5rem" }}>{tag}</span>
          ))}
        </p>
      )}

      <Link to={`/edit-project/${project.id}`} className="button">
        Edit Project
      </Link>
    </article>
  );
}