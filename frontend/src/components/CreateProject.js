import { useState } from "react";
import { Link } from "react-router-dom";


export default function CreateProject({ onCreate }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("web");
  const [tags, setTags] = useState("");
  const [version, setVersion] = useState("1.0.0");
  const [image, setImage] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Image must be ≤ 5MB");
    }
  }

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || desc.length < 10) return;

    onCreate?.({
      id: `p${Math.random().toString(36).slice(2, 7)}`,
      name,
      description: desc,
      type,
      hashtags: tags.split(" ").filter((t) => t.startsWith("#")),
      version,
      createdAt: new Date().toISOString(),
      image,
      files: [],
      messages: [],
    });

    setName("");
    setDesc("");
    setTags("");
    setVersion("1.0.0");
    setImage(null);
  }

  return (
    <form className="card grid" onSubmit={submit}>
      <h3>Create Project</h3>
      <label>
        Project Name
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description
        <textarea
          className="input"
          rows="3"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
      </label>
      <label>
        Type
        <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="web">Web</option>
          <option value="desktop">Desktop</option>
          <option value="mobile">Mobile</option>
          <option value="library">Library</option>
        </select>
      </label>
      <label>
        Programming Languages (hashtags)
        <input
          className="input"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="#JavaScript #Python"
        />
      </label>
      <label>
        Version
        <input
          className="input"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        />
      </label>
      <label>
        Project Image
        <input className="input" type="file" accept="image/*" onChange={handleImage} />
      </label>
      {image && <img src={image} alt="Preview" style={{ maxWidth: "150px", marginTop: "0.5rem" }} />}
      <button className="button">Create</button>
    </form>
  );
}
