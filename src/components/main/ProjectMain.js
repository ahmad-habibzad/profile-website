import React from "react";
import merit from "../../resources/images/merit.JPG";
function ProjectMain() {
  return (
    <div className="project-container">
      <div className="project-main">
        <div className="project-content">
          <div className="project-label">Featured Project</div>
          <h4 className="main-project-title">Banking Application</h4>
          <div className="project-details">
            <p>
              This is the front-end of a banking app. It is build with react.
            </p>
          </div>
          <code className="techs">
            See the code on{" "}
            <a
              className="lnk4"
              href="https://github.com/Habibzad/MeritBank_Client"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github lnk4"></i>
            </a>
          </code>
        </div>

        <div className="project-img">
          <a
            href="https://github.com/Habibzad/MeritBank_Client"
            rel="noreferrer"
            target="_blank"
          >
            <img className="project-image" src={merit} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectMain;
