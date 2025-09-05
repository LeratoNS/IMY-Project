// Lerato Sibanda u22705504 P-14
export default function ProfileComponent({ user }) {
  return (
    <article className="card" style={{ textAlign: "center" }}>
      <img
        src="/assets/images/profile-placeholder.png"
        alt="Profile"
        style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 1rem" }}
      />
      <h2 style={{ margin: "0.5rem 0", color: "#e2e8f0" }}>{user.name}</h2>
      <p style={{ margin: "0.25rem 0", color: "#93c5fd", fontSize: "1.1rem" }}>@{user.username}</p>
      <p style={{ margin: "1rem 0", lineHeight: "1.5" }}>{user.bio || "No bio yet..."}</p>

      <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
        {user.birthday && <p style={{ margin: "0.5rem 0" }}><strong>Birthday:</strong> {user.birthday}</p>}
        {user.work && <p style={{ margin: "0.5rem 0" }}><strong>Work:</strong> {user.work}</p>}
        {user.contact && <p style={{ margin: "0.5rem 0" }}><strong>Contact:</strong> {user.contact}</p>}

        {user.languages && user.languages.length > 0 && (
          <div style={{ margin: "1rem 0" }}>
            <strong>Languages:</strong>
            <div style={{ marginTop: "0.5rem" }}>
              {user.languages.map((lang, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    background: "#1e40af",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "20px",
                    margin: "0.25rem",
                    fontSize: "0.85rem"
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}