import React from "react";

function Skills() {
  return (
    <div className="section skills flex" id="skills">
      <div className="skills-wrapper">
        <h2 className="section-title">Skills & Tools</h2>
        <p className="skills-para">
          The tools and technologies I am comfortable with:
        </p>
        <div className="skill-container flex">
          <div className="skill">
            <i className="fab fa-java fa-skills"></i>
            <h2 style={{ marginTop: "10px" }}>Java</h2>
            <p>
              I use Java and Spring Boot to create REST APIs. I write clean and
              well-formatted code that is easy to read, trouble-shoot and
              maintain.
            </p>
          </div>
          <div className="skill">
            <i className="fab fa-react fa-skills"></i>
            <h2 style={{ marginTop: "10px" }}>React</h2>
            <p>
              I build user interfaces using ReactJS. Additionally, I use CSS
              current best practices to build responsive websites.
            </p>
          </div>
          <div className="skill">
            <i className="fas fa-database fa-skills"></i>
            <h2 style={{ marginTop: "10px" }}>MySQL</h2>
            <p>
              Together with Spring Data JPA, I use MySQL to build databases for
              my web applications.
            </p>
          </div>
        </div>
        <div className="tools">
          <h3 className="sub-title">Other Skills:</h3>
          <p className="skills-para">
            The following are some other tools and technologies I use to bring
            my projects to life:
          </p>
          <div className=" tools-container">
            <div className="skills-flex-container">
              <i className="fas fa-caret-right far-skills"></i>
              <p>HTML5</p>
              <br />
              <i className="fas fa-caret-right far-skills"></i>
              <p>CSS3</p> <br />
              <i className="fas fa-caret-right far-skills"></i>
              <p>JavaScript</p>
              <br />
              <i className="fas fa-caret-right far-skills"></i>
              <p>Bootstrap</p>
            </div>
            <div className="skills-flex-container">
              <i className="fas fa-caret-right far-skills"></i>
              <p>Git</p>
              <br />
              <i className="fas fa-caret-right far-skills"></i>
              <p>GitHub</p>
              <br />
              <i className="fas fa-caret-right far-skills"></i>
              <p>Terminal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
