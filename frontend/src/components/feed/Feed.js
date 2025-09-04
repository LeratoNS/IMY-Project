import { Link } from "react-router-dom";
import ProjectPreview from '../ProjectPreview.js';


export default function Feed({ projects }){
return (
<section className="grid" aria-label="Project feed">
{projects.map(p => <ProjectPreview key={p.id} project={p} />)}
</section>
);
}