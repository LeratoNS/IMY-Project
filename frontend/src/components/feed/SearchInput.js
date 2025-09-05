// Lerato Sibanda u22705504 P-14
export default function SearchInput({ value, onChange }) {
    return (
        <input className="input" placeholder="Search projects/users" value={value} onChange={e => onChange?.(e.target.value)} />
    );
}