// Lerato Sibanda u22705504 P-14
export default function FilesList({ files, isLocked }) {
    return (
        <section className="card">
            <h3>
                Files ({files.length})
                {isLocked && <span style={{ color: "#ef4444", marginLeft: "0.5rem" }}>🔒</span>}
            </h3>
            <ul>
                {files.map((file, index) => (
                    <li key={index} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.5rem 0",
                        borderBottom: index < files.length - 1 ? "1px solid #374151" : "none"
                    }}>
                        <span style={{ fontFamily: 'monospace' }}>{file}</span>
                        {isLocked && <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>Read-only</span>}
                    </li>
                ))}
            </ul>
        </section>
    );
}