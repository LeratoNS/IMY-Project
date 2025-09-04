import ProjectPreview from '../ProjectPreview.js';


export default function UserProjectsList({ projects }){
return (
<section className="grid">
{projects.map(p => <ProjectPreview key={p.id} project={p} />)}
</section>
);
}