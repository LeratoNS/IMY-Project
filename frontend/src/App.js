import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import './app.css';


export default function App() {
const location = useLocation();
const hideHeader = location.pathname === '/'; // no header on Splash


return (
<div>
{!hideHeader && <Header />}
<main style={{ padding: '1rem', maxWidth: 1000, margin: '0 auto' }}>
<Outlet />
</main>
</div>
);
}
