// Lerato Sibanda u22705504 P-14
import { Link } from 'react-router-dom';


export default function ProfilePreview({ user }) {
    return (
        <article className="card">
            <h3 style={{ margin: '0 0 .25rem 0' }}>{user.name}</h3>
            <p style={{ marginTop: 0, opacity: .9 }}>@{user.username}</p>
            <Link to={`/profile/${user.id}`}>View profile</Link>
        </article>
    );
}