// Lerato Sibanda u22705504 P-14
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { mockProjects, mockUsers } from '../data/mock.js';
import ProjectComponent from '../components/project/ProjectComponent.js';
import FilesList from '../components/project/FilesList.js';
import MessagesList from '../components/project/MessagesList.js';
import EditProjectForm from '../components/project/EditProjectForm.js';
import CheckInForm from '../components/project/CheckInForm.js';

export default function Project(){
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [projects, setProjects] = useState(mockProjects);
  
  const project = projects.find(p => p.id === id) || mockProjects[0];
  const currentUser = mockUsers[0];
  const isProjectOwner = project.owner === currentUser.id;
  const isCheckedOut = project.checkedOutBy !== null;
  const isCheckedOutByMe = project.checkedOutBy === currentUser.id;
  
  // Check if current user is a member of this project
  const isProjectMember = project.members.includes(currentUser.id);

  const handleSave = (updatedProject) => {
    const updatedProjects = projects.map(p => 
      p.id === updatedProject.id ? updatedProject : p
    );
    setProjects(updatedProjects);
    setIsEditing(false);
  };

  const handleCheckOut = () => {
    if (!isProjectMember) {
      alert("You must be a member of this project to check it out.");
      return;
    }
    
    const updatedProjects = projects.map(p =>
      p.id === project.id ? { ...p, checkedOutBy: currentUser.id } : p
    );
    setProjects(updatedProjects);
  };

  const handleCheckIn = (checkInData) => {
    const updatedProjects = projects.map(p =>
      p.id === project.id ? { 
        ...p, 
        files: checkInData.files,
        messages: checkInData.messages,
        version: checkInData.version,
        checkedOutBy: checkInData.checkedOutBy
      } : p
    );
    setProjects(updatedProjects);
    setIsCheckingIn(false);
  };

  const handleCancelCheckOut = () => {
    const updatedProjects = projects.map(p =>
      p.id === project.id ? { ...p, checkedOutBy: null } : p
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="grid">
      {/* Header with project info and actions */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ margin: 0 }}>{project.name}</h2>
          <p style={{ margin: "0.25rem 0 0 0", color: "#94a3b8", fontSize: "0.9rem" }}>
            Version: {project.version} {isCheckedOut && " Checked out"}
          </p>
        </div>
        
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {/* Check-out/Check-in buttons - Only show for project members */}
          {isProjectMember && (
            <>
              {!isCheckedOut ? (
                <button 
                  className="button" 
                  onClick={handleCheckOut}
                  style={{ background: "#16a34a" }}
                >
                  Check Out
                </button>
              ) : isCheckedOutByMe ? (
                <>
                  <button 
                    className="button" 
                    onClick={() => setIsCheckingIn(true)}
                    style={{ background: "#2563eb" }}
                  >
                    Check In
                  </button>
                  <button 
                    className="button" 
                    onClick={handleCancelCheckOut}
                    style={{ background: "#dc2626" }}
                  >
                    Cancel Check-out
                  </button>
                </>
              ) : (
                <span style={{ color: "#ef4444", padding: "0.5rem" }}>
                  🔒 Checked out by {mockUsers.find(u => u.id === project.checkedOutBy)?.name}
                </span>
              )}
            </>
          )}

          {/* Edit button (only for owner when not checked out) */}
          {isProjectOwner && !isCheckedOut && (
            <button 
              className="button" 
              onClick={() => setIsEditing(true)}
              style={{ background: "#2563eb" }}
            >
              Edit Project
            </button>
          )}

          {/* Message for non-members */}
          {!isProjectMember && !isProjectOwner && (
            <span style={{ color: "#f59e0b", padding: "0.5rem" }}>
              ⚠️ You are not a member of this project
            </span>
          )}
        </div>
      </div>

      {/* Check-in Form */}
      {isCheckingIn && (
        <CheckInForm
          project={project}
          onCheckIn={handleCheckIn}
          onCancel={() => setIsCheckingIn(false)}
        />
      )}

      {/* Edit Form */}
      {isEditing && (
        <EditProjectForm
          project={project}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      )}

      {/* Project View (when not editing or checking in) */}
      {!isEditing && !isCheckingIn && (
        <>
          <ProjectComponent project={project} currentUser={currentUser} />
          <FilesList files={project.files} isLocked={isCheckedOut && !isCheckedOutByMe} />
          <MessagesList messages={project.messages} />
        </>
      )}
    </div>
  );
}