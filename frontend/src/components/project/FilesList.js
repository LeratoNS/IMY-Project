export default function FilesList({ files }){
return (
<section className="card">
<h3>Files</h3>
<ul>
{files.map((f,i) => <li key={i}>{f}</li>)}
</ul>
</section>
);
}