// Lerato Sibanda u22705504 P-14
import { Link, useLocation, useParams } from "react-router-dom";
import { mockUsers, mockProjects } from '../data/mock.js';
import logo from '../../public/assets/images/logo.png';

export default function Header() {
  const location = useLocation();
  const params = useParams();

  // Get current user based on route or default to first user
  const getCurrentUser = () => {
    // If we're on a profile page, use that user ID
    if (params.id && location.pathname.includes('/profile/')) {
      return mockUsers.find(user => user.id === params.id) || mockUsers[0];
    }
    // Default to first user for demo purposes
    return mockUsers[0];
  };

  const currentUser = getCurrentUser();

  // Get user's projects dynamically
  const userProjects = mockProjects.filter(project => project.owner === currentUser.id);
  const firstProjectId = userProjects.length > 0 ? userProjects[0].id : mockProjects[0].id;

  // Check if we're on the splash page to conditionally render
  const isSplashPage = location.pathname === '/';

  if (isSplashPage) {
    return null; // Don't render header on splash page
  }

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "#111827",
      borderBottom: "1px solid #1f2937",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo and Brand */}
      <Link
        to="/home"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none"
        }}
      >
        <img
          src={logo}
          alt="Project Logo"
          style={{
            height: "32px",
            borderRadius: "4px"
          }}
        />
        <strong style={{
          color: "#e2e8f0",
          fontSize: "1.2rem"
        }}>
          Collab Code
        </strong>
      </Link>

      {/* Navigation Links - Dynamic based on current context */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem"
      }}>
        <NavLink to="/home" label="Home" />

        {/* Dynamic Profile Link - changes based on current context */}
        <NavLink
          to={`/profile/${currentUser.id}`}
          label={
            location.pathname.includes('/profile/')
              ? "My Profile"
              : `${currentUser.name.split(' ')[0]}'s Profile`
          }
        />

        {/* Dynamic Project Link */}
        <NavLink
          to={`/project/${firstProjectId}`}
          label={
            userProjects.length > 0
              ? "My Projects"
              : "Browse Projects"
          }
        />

        {/* Show current context information */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          color: "#e2e8f0",
          padding: "0.5rem 1rem",
          background: "#1f2937",
          borderRadius: "6px"
        }}>
          <span>Viewing: {getCurrentContext()}</span>
        </div>
      </div>
    </nav>
  );

  // Helper function to determine current context
  function getCurrentContext() {
    if (location.pathname === '/home') return 'Home Feed';
    if (location.pathname.includes('/profile/')) {
      const user = mockUsers.find(u => u.id === params.id);
      return user ? `${user.name}'s Profile` : 'User Profile';
    }
    if (location.pathname.includes('/project/')) {
      const project = mockProjects.find(p => p.id === params.id);
      return project ? project.name : 'Project';
    }
    return 'Dashboard';
  }
}

// Reusable NavLink component for cleaner code
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      style={{
        color: "#93c5fd",
        textDecoration: "none",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        transition: "background-color 0.2s",
        border: "1px solid transparent"
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#1f2937";
        e.target.style.borderColor = "#334155";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.borderColor = "transparent";
      }}
    >
      {label}
    </Link>
  );
}