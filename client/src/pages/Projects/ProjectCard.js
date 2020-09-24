import React, { useState } from "react";

function ProjectCard({
  name,
  description,
  url,
  homepage,
  created_at,
  language,
}) {
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      window.location = url;
    }
  };

  return (
    <div className="projects_project-card" onClick={() => setRedirect(true)}>
      <h4 className="project-card-name">{name}</h4>
      <p className="project-card-description">{description}</p>
      <p className="project-card-created">{created_at}</p>
      <p className="project-card-language">{language}</p>
      {renderRedirect()}
    </div>
  );
}

export default ProjectCard;
