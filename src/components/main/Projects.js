import React, { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectsList } from "../../resources/Projects";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(ProjectsList);
  }, []);

  const output = projects.map((project) => (
    <Project key={project.id} data={project} />
  ));
  return (
    <div className="section" id="projects">
      <h3 className="section-title">Projects</h3>
      <div className="projects-container">{output}</div>
    </div>
  );
}

export default Projects;
