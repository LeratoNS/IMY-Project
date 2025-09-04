export const mockUsers = [
  {
    id: "u1",
    name: "Lerato Sibanda",
    username: "lerato",
    bio: "Frontend tinkerer",
    birthday: "1999-08-12",
    work: "Software Engineer",
    contact: "lerato@example.com",
    languages: ["JavaScript", "Python", "C++"],
    friends: ["u2", "u3"],
  },
  {
    id: "u2",
    name: "Thabo Moloi",
    username: "thabo",
    bio: "Backend enthusiast and database wizard.",
    birthday: "1998-05-20",
    work: "Data Scientist",
    contact: "thabo@example.com",
    languages: ["Python", "SQL", "Java"],
    friends: ["u1", "u3"],
  },
  {
    id: "u3",
    name: "Naledi Nkosi",
    username: "naledi",
    bio: "UI/UX designer with a passion for clean interfaces.",
    birthday: "2000-02-28",
    work: "UI/UX Designer",
    contact: "naledi@example.com",
    languages: ["JavaScript", "Swift", "C#"],
    friends: ["u1", "u2"],
  },
];

export const mockProjects = [
{ id: 'p1', name: 'Alpha', description: 'A cool project', owner: 'u1', files: ['README.md', 'index.js'], messages: ['Init repo', 'Added login stub'] },
{ id: 'p2', name: 'Beta', description: 'Another cool project', owner: 'u2', files: ['server.js'], messages: ['Initial commit'] }
];

