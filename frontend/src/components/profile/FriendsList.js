import ProfilePreview from '../ProfilePreview.js';


export default function FriendsList({ users }){
return (
<aside className="grid">
{users.map(u => <ProfilePreview key={u.id} user={u} />)}
</aside>
);
}