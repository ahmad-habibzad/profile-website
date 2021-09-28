import React from "react";

function Project(props) {
  return (
    <div className=" project">
      <div className="project-links">
        <a href={props.data.link} rel="noreferrer" target="_blank">
          <i className="far fa-folder lnk3"></i>
        </a>
        <a
          className="lnk4"
          href={props.data.github}
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github lnk4"></i>
        </a>
        {props.data.link ? (
          <a href={props.data.link} rel="noreferrer" target="_blank">
            <i className="fas fa-external-link-alt lnk2"></i>
          </a>
        ) : null}
      </div>
      <div className="project-title">
        <h3 className="project-description">{props.data.name}</h3>
        <p className="project-summary">{props.data.sammary}</p>
      </div>
      <code className="langs">{props.data.tech}</code>
    </div>
  );
}

export default Project;
