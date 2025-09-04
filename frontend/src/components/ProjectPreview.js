import { Link } from 'react-router-dom';


export default function ProjectPreview({ project }){
return (
<article className="card">
<h3 style={{margin:'0 0 .25rem 0'}}>{project.name}</h3>
<p style={{marginTop:0, opacity:.9}}>{project.description}</p>
<Link to={`/project/${project.id}`}>Open Project</Link>
</article>
);
}