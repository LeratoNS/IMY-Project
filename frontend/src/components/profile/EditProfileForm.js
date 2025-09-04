import { useState } from 'react';


export default function EditProfileForm({ user, onSave }){
const [name, setName] = useState(user.name);
const [bio, setBio] = useState(user.bio || '');
const valid = name.trim().length >= 3 && bio.trim().length >= 5;


function submit(e){
e.preventDefault();
if(!valid) return;
onSave?.({ ...user, name, bio });
}


return (
<form className="card grid" onSubmit={submit}>
<h3>Edit Profile</h3>
<input className="input" value={name} onChange={e=>setName(e.target.value)} required minLength={3} />
<textarea className="input" rows="3" value={bio} onChange={e=>setBio(e.target.value)} required minLength={5}></textarea>
<button className="button" disabled={!valid}>Save</button>
</form>
);
}
