// import { Link } from "react-router-dom";
// import logo from '../../public/assets/images/logo.png';

// export default function Header() {
//   return (
//     <nav>
//       <Link to="/home" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//         <img src={logo} alt="Logo" style={{ height: "32px" }} />
//         <strong>IMY220</strong>
//       </Link>
//       <Link to="/home">Home</Link>
//       <Link to="/profile/u1">Profile</Link>
//       <Link to="/project/p1">Project</Link>
//     </nav>
//   );
// }

// A more dynamic version of your Header.js
import { Link } from "react-router-dom";
import logo from '../../public/assets/images/logo.png';

export default function Header({ userId, projectId }) {
  // Check if userId and projectId are passed in.
  const profileLink = userId ? `/profile/${userId}` : '/login';
  const projectLink = projectId ? `/project/${projectId}` : '/projects';

  return (
    <nav>
      <Link to="/home" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img src={logo} alt="Logo" style={{ height: "32px" }} />
        <strong>IMY220</strong>
      </Link>
      <Link to="/home">Home</Link>
      <Link to={profileLink}>Profile</Link>
      <Link to={projectLink}>Project</Link>
    </nav>
  );
}
