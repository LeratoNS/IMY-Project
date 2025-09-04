import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import Splash from './pages/Splash.js';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Project from './pages/Project.js';


const root = createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path="/" element={<App />}>
<Route index element={<Splash />} />
<Route path="home" element={<Home />} />
<Route path="profile/:id" element={<Profile />} />
<Route path="project/:id" element={<Project />} />
</Route>
</Routes>
</BrowserRouter>
);