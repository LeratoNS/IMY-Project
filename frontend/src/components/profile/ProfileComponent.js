export default function ProfileComponent({ user }) {
  return (
    <article className="card">
      <img
        src="/assets/images/profile-placeholder.png"
        alt="Profile"
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <p>{user.bio}</p>
      <p>Birthday: {user.birthday}</p>
      <p>Work: {user.work}</p>
      <p>Contact: {user.contact}</p>
      <div>
        <strong>Languages:</strong>{" "}
        {user.languages.map((lang, i) => (
          <span key={i} style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}>
            #{lang}
          </span>
        ))}
      </div>
    </article>
  );
}
