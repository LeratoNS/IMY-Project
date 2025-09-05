// Lerato Sibanda u22705504 P-14
import { useState } from "react";
import { mockProjects, mockUsers } from "../data/mock.js";
import Feed from "../components/feed/Feed.js";
import SearchInput from "../components/feed/SearchInput.js";
import CreateProject from "../components/CreateProject.js";

export default function Home() {
  const currentUser = mockUsers[0]; // simulate logged-in user
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState(mockProjects);
  const [feedType, setFeedType] = useState("local"); // "local" or "global"
  const [sortBy, setSortBy] = useState("date"); // "date" or "popularity"
  const [isCreating, setIsCreating] = useState(false);

  // Filter: local feed = projects where owner is in friends
  const friendIds = currentUser.friends;
  let filtered = feedType === "local"
    ? projects.filter((p) => friendIds.includes(p.owner))
    : [...projects];

  // Enhanced search filter - searches both project names and user names
  filtered = filtered.filter((p) => {
    const projectNameMatch = p.name.toLowerCase().includes(search.toLowerCase());
    
    // Find the project owner's user data
    const projectOwner = mockUsers.find(user => user.id === p.owner);
    const userNameMatch = projectOwner && (
      projectOwner.name.toLowerCase().includes(search.toLowerCase()) ||
      projectOwner.username.toLowerCase().includes(search.toLowerCase())
    );
    
    // Return true if either project name or user name matches the search
    return projectNameMatch || userNameMatch;
  });

  // Sorting
  if (sortBy === "date") {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortBy === "popularity") {
    filtered.sort((a, b) => (b.files?.length || 0) - (a.files?.length || 0));
  }

  const handleCreate = (newProject) => {
    setProjects([
      { 
        ...newProject, 
        owner: currentUser.id, // Add owner field
        createdAt: new Date().toISOString() 
      },
      ...projects,
    ]);
    setIsCreating(false); // Close the form after creation
  };

  return (
    <div className="grid">
      {/* Header with controls and create button */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "1rem", 
        flexWrap: "wrap", 
        gap: "1rem" 
      }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button 
            className={`button ${feedType === "local" ? "active" : ""}`} 
            onClick={() => setFeedType("local")}
            style={{ 
              background: feedType === "local" ? "#2563eb" : "#374151",
              border: "1px solid #4b5563"
            }}
          >
            Local Feed
          </button>
          <button 
            className={`button ${feedType === "global" ? "active" : ""}`} 
            onClick={() => setFeedType("global")}
            style={{ 
              background: feedType === "global" ? "#2563eb" : "#374151",
              border: "1px solid #4b5563"
            }}
          >
            Global Feed
          </button>
          <select
            className="input"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ minWidth: "140px" }}
          >
            <option value="date">Newest First</option>
            <option value="popularity">By Popularity</option>
          </select>
        </div>

        {/* New Project Button */}
        {!isCreating && (
          <button 
            className="button" 
            onClick={() => setIsCreating(true)}
            style={{ 
              background: "#16a34a", 
              whiteSpace: "nowrap",
              marginLeft: "auto"
            }}
          >
            + New Project
          </button>
        )}
      </div>

      {/* Search Input */}
      <SearchInput value={search} onChange={setSearch} />

      {/* Search info text */}
      {search && (
        <div style={{ 
          color: "#94a3b8", 
          fontSize: "0.9rem", 
          textAlign: "center",
          marginBottom: "0.5rem"
        }}>
          Searching in project names and user names...
        </div>
      )}

      {/* Create Project Form (shown when isCreating is true) */}
      {isCreating && (
        <CreateProject
          onCreate={handleCreate}
          onCancel={() => setIsCreating(false)}
        />
      )}

      {/* Feed */}
      <Feed projects={filtered} />

      {/* No results message */}
      {search && filtered.length === 0 && (
        <div style={{ 
          textAlign: "center", 
          color: "#94a3b8", 
          padding: "2rem",
          fontStyle: "italic"
        }}>
          No projects or users found matching "{search}"
        </div>
      )}
    </div>
  );
}