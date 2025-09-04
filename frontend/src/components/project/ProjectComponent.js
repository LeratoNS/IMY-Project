export default function ProjectComponent({ project }){
return (
<article className="card">
<h2 style={{marginTop:0}}>{project.name}</h2>
<p>{project.description}</p>
</article>
);
}