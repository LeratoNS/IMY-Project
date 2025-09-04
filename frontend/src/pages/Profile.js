import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { mockUsers, mockProjects } from "../data/mock.js";
import ProfileComponent from "../components/profile/ProfileComponent.js";
import EditProfileForm from "../components/profile/EditProfileForm.js";
import UserProjectsList from "../components/profile/UserProjectsList.js";
import FriendsList from "../components/profile/FriendsList.js";

export default function Profile() {
  const { id } = useParams();
  const currentUser = mockUsers[0]; // simulate logged-in user
  const user = mockUsers.find((u) => u.id === id) || currentUser;

  const friends = mockUsers.filter((u) => user.friends.includes(u.id));
  const projects = mockProjects.filter((p) => p.owner === user.id);

  return (
    <div className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
      <div className="grid">
        <ProfileComponent user={user} />

        {user.id === currentUser.id && (
    <Link to="/edit-profile" className="button" style={{ marginBottom: "1rem" }}>
      Edit Profile
    </Link>
  )}

        {/* Show connect button only if not viewing own profile */}
        {user.id !== currentUser.id && (
          <button className="button" style={{ marginBottom: "1rem" }}>
            {currentUser.friends.includes(user.id)
              ? "Connected"
              : "Add Friend"}
          </button>
        )}

        <EditProfileForm
          user={user}
          onSave={(u) => console.log("saved", u)}
        />

        <section className="card">
          <h3>Projects</h3>
          <UserProjectsList projects={projects} />
        </section>
      </div>

      <div>
        <section className="card">
          <h3>Friends</h3>
          <FriendsList users={friends} />
        </section>
      </div>
    </div>
  );
}
