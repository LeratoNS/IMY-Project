import LoginForm from '../components/forms/LoginForm.js';
import SignupForm from '../components/forms/SignupForm.js';
import { motion } from "framer-motion";

export default function Splash(){
return (
<div style={{ display:'grid', gap:'1rem', maxWidth:900, margin:'3rem auto' }}>
{/* <header style={{ textAlign: "center", padding: "2rem" }}>
  <img src="/assets/images/logo.png" alt="Logo" style={{ height: "80px" }} />
  <h1>Welcome to Collab Code</h1>
  <p>Collaborate, manage, and track your coding projects with ease.</p>
</header> */}

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2>Collaborate Seamlessly</h2>
  <p>Manage your repositories, check-ins, and project members with ease.</p>
</motion.section>

<div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
<LoginForm />
<SignupForm />
</div>
</div>
);
}