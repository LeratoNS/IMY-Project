export default function MessagesList({ messages }){
return (
<section className="card">
<h3>Messages</h3>
<ul>
{messages.map((m,i) => <li key={i}>{m}</li>)}
</ul>
</section>
);
}