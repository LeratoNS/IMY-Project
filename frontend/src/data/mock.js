export const mockUsers = [
  {
    id: 'u1',
    name: 'Lerato Sibanda',
    username: 'lerato',
    bio: 'Frontend tinkerer',
    birthday: '2004-01-21',
    work: 'Software Developer',
    contact: 'lerato@gmail.com',
    languages: ['JavaScript', 'React', 'Python'],
    friends: ['u2', 'u3'],
    projects: ['p1', 'p3']
  },
  {
    id: 'u2',
    name: 'Michelle Jones',
    username: 'mich',
    bio: 'Backend enjoyer',
    birthday: '1993-08-22',
    work: 'Security Engineer',
    contact: 'michelle@gmail.com',
    languages: ['Node.js', 'Java', 'SQL'],
    friends: ['u1','u3'],
    projects: ['p2']
  },
  {
    id: 'u3',
    name: 'Faith Williams',
    username: 'faith',
    bio: 'Design & docs',
    birthday: '1997-11-05',
    work: 'UI/UX Designer',
    contact: 'faith@gmail.com',
    languages: ['C#', 'CSS', 'HTML'],
    friends: ['u1'],
    projects: []
  }
];


export const mockProjects = [
  {
    id: 'p1',
    name: 'Alpha',
    description: 'A cool frontend project',
    owner: 'u1',
    members: ['u1', 'u2'],
    files: ['README.md', 'index.js'],
    messages: ['Init repo', 'Added login stub'],
    createdAt: '2024-01-15T10:30:00Z',
    checkedOutBy: null,
    version: '1.0.0'
  },
  {
    id: 'p2',
    name: 'Beta',
    description: 'A backend API project',
    owner: 'u2',
    members: ['u2', 'u3'],
    files: ['server.js', 'package.json'],
    messages: ['Initial commit', 'Setup express server'],
    createdAt: '2024-01-10T14:20:00Z',
    checkedOutBy: null,
    version: '1.0.0'
  },
  {
    id: 'p3',
    name: 'Gamma',
    description: 'A full-stack application',
    owner: 'u1',
    members: ['u1', 'u3'],
    files: ['client.js', 'server.js', 'database.js'],
    messages: ['Project started', 'Added database connection'],
    createdAt: '2024-01-05T09:15:00Z',
    checkedOutBy: null,
    version: '1.0.0'
  }
];