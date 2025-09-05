// Lerato Sibanda u22705504 P-14
import { useState } from "react";
import { useParams } from "react-router-dom";
import { mockUsers, mockProjects } from "../data/mock.js";
import ProfileComponent from "../components/profile/ProfileComponent.js";
import EditProfileForm from "../components/profile/EditProfileForm.js";
import UserProjectsList from "../components/profile/UserProjectsList.js";
import FriendsList from "../components/profile/FriendsList.js";

export default function Profile() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = mockUsers[0]; // simulate logged-in user
  const user = mockUsers.find((u) => u.id === id) || currentUser;

  console.log("Current user:", user); // Debug log
  console.log("All projects:", mockProjects); // Debug log

  // Get user's friends
  const friends = mockUsers.filter((u) => user.friends.includes(u.id));
  
  // Get user's projects - TWO methods to ensure we catch them all:
  // Method 1: By owner field in projects
  const projectsByOwner = mockProjects.filter((p) => p.owner === user.id);
  
  // Method 2: By projects array in user object (if exists)
  const projectsByIds = user.projects 
    ? mockProjects.filter((p) => user.projects.includes(p.id))
    : [];
  
  // Combine both methods and remove duplicates
  const allUserProjects = [...projectsByOwner, ...projectsByIds];
  const uniqueProjects = allUserProjects.filter((project, index, self) =>
    index === self.findIndex((p) => p.id === project.id)
  );

  console.log("User's projects:", uniqueProjects); // Debug log

  const handleSave = (updatedUser) => {
    console.log("Profile saved:", updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
      <div className="grid" style={{ gap: "1.5rem" }}>
        <ProfileComponent user={user} />

        {/* Edit Profile Button */}
        {user.id === currentUser.id && (
          <div style={{ marginBottom: "1rem" }}>
            {!isEditing ? (
              <button className="button" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            ) : (
              <button className="button" onClick={() => setIsEditing(false)} style={{ background: "#dc2626" }}>
                Cancel Editing
              </button>
            )}
          </div>
        )}

        {/* Connect Button for other users */}
        {user.id !== currentUser.id && (
          <button className="button" style={{ background: "#16a34a" }}>
            {currentUser.friends.includes(user.id) ? "✓ Connected" : "+ Add Friend"}
          </button>
        )}

        {/* Edit Form */}
        {isEditing && (
          <EditProfileForm user={user} onSave={handleSave} onCancel={() => setIsEditing(false)} />
        )}

        {/* Projects Section - Always show when not editing */}
        {!isEditing && (
          <section className="card">
            <h3 style={{ marginTop: 0 }}>Projects ({uniqueProjects.length})</h3>
            {uniqueProjects.length > 0 ? (
              <UserProjectsList projects={uniqueProjects} />
            ) : (
              <p style={{ color: "#94a3b8", textAlign: "center", padding: "2rem" }}>
                {user.id === currentUser.id 
                  ? "You haven't created any projects yet." 
                  : "This user hasn't created any projects yet."}
              </p>
            )}
          </section>
        )}
      </div>

      <div>
        {/* Friends Section - Always show when not editing */}
        {!isEditing && (
          <section className="card">
            <h3 style={{ marginTop: 0 }}>Friends ({friends.length})</h3>
            {friends.length > 0 ? (
              <FriendsList users={friends} />
            ) : (
              <p style={{ color: "#94a3b8", textAlign: "center", padding: "2rem" }}>
                {user.id === currentUser.id 
                  ? "You haven't added any friends yet." 
                  : "This user hasn't added any friends yet."}
              </p>
            )}
          </section>
        )}
      </div>
    </div>
  );
}