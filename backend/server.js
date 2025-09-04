import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// --- Auth Endpoint Stubs ---
app.post('/api/auth/login', (req, res) => {
const { email } = req.body || {};
return res.json({
ok: true,
message: `Logged in as ${email}`,
token: 'dummy-jwt-token'
});
});


app.post('/api/auth/signup', (req, res) => {
const { email, username } = req.body || {};
return res.status(201).json({
ok: true,
message: `User created: ${username || email}`,
token: 'dummy-jwt-token'
});
});


// --- Static frontend ---
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));


// History API fallback for React Router
app.get('*', (req, res) => {
res.sendFile(path.join(publicDir, 'index.html'));
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));