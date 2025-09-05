// Lerato Sibanda u22705504 P-14
import { useEffect, useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const emailValid = /.+@.+\..+/.test(email);
    const passValid = password.length >= 6;


    async function submit(e) {
        e.preventDefault();
        if (!emailValid || !passValid) return;
        setMsg('');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            setMsg(data.message || 'Logged in');
            // Example of identifying the user (store token/user in localStorage)
            if (data.token) { localStorage.setItem('token', data.token); }
        } catch (err) { setMsg('Network error'); }
    }


    useEffect(() => { setMsg(''); }, [email, password]);


    return (
        <form className="card grid" onSubmit={submit} noValidate>
            <h3>Login</h3>
            <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            {!emailValid && email && <small style={{ color: '#fca5a5' }}>Please enter a valid email</small>}
            <input className="input" type="password" placeholder="Password (≥6)" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
            {!passValid && password && <small style={{ color: '#fca5a5' }}>Password must be at least 6 characters</small>}
            <button className="button" disabled={!(emailValid && passValid)}>Sign In</button>
            {msg && <div aria-live="polite">{msg}</div>}
        </form>
    );
}