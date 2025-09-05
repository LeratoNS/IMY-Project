// Lerato Sibanda u22705504 P-14
export default function MessagesList({ messages }) {
    return (
        <section className="card">
            <h3>Messages ({messages.length})</h3>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </section>
    );
}