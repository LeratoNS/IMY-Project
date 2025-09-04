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

  // Filter: local feed = projects where owner is in friends
  const friendIds = currentUser.friends;
  let filtered = feedType === "local"
    ? projects.filter((p) => friendIds.includes(p.owner))
    : [...projects];

  // Search filter
  filtered = filtered.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  if (sortBy === "date") {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortBy === "popularity") {
    filtered.sort((a, b) => (b.files?.length || 0) - (a.files?.length || 0));
  }

  return (
    <div className="grid">
      <div style={{ display: "flex", gap: "1rem" }}>
        <button className="button" onClick={() => setFeedType("local")}>
          Local Feed
        </button>
        <button className="button" onClick={() => setFeedType("global")}>
          Global Feed
        </button>
        <select
          className="input"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Newest First</option>
          <option value="popularity">By Popularity</option>
        </select>
      </div>

      <SearchInput value={search} onChange={setSearch} />
      <CreateProject
        onCreate={(p) =>
          setProjects([
            { ...p, owner: currentUser.id, createdAt: new Date().toISOString() },
            ...projects,
          ])
        }
      />
      <Feed projects={filtered} />
    </div>
  );
}
