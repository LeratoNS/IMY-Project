// Lerato Sibanda u22705504 P-14
import { useEffect, useState } from 'react';

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');


    const emailValid = /.+@.+\..+/.test(email);
    const passValid = password.length >= 6;
    const usernameValid = username.trim().length >= 3;
    const match = password === confirm;
    const formValid = emailValid && passValid && usernameValid && match;


    async function submit(e) {
        e.preventDefault();
        if (!formValid) return;
        setMsg('');
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, username })
            });
            const data = await res.json();
            setMsg(data.message || 'Signed up');
            if (data.token) { localStorage.setItem('token', data.token); }
        } catch (err) { setMsg('Network error'); }
    }


    useEffect(() => { setMsg(''); }, [email, password, confirm, username]);


    return (
        <form className="card grid" onSubmit={submit} noValidate>
            <h3>Sign Up</h3>
            <input className="input" placeholder="Username (≥3)" value={username} onChange={e => setUsername(e.target.value)} required minLength={3} />
            {!usernameValid && username && <small style={{ color: '#fca5a5' }}>Username must be at least 3 characters</small>}
            <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            {!emailValid && email && <small style={{ color: '#fca5a5' }}>Please enter a valid email</small>}
            <input className="input" type="password" placeholder="Password (≥6)" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
            {!passValid && password && <small style={{ color: '#fca5a5' }}>Password must be at least 6 characters</small>}
            <input className="input" type="password" placeholder="Confirm password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
            {!match && confirm && <small style={{ color: '#fca5a5' }}>Passwords do not match</small>}
            <button className="button" disabled={!formValid}>Create Account</button>
            {msg && <div aria-live="polite">{msg}</div>}
        </form>
    );
}