import React from 'react'

function Projects() {
    return (
        <div className="section" id="projects">
            <h3 className="section-title">Projects</h3>
            <div className="projects-container">
                <div className=" project">
                    <div className="project-img_container">
                        <a href="https://habibzad.github.io/rpsGame/" rel="noreferrer" target="_blank">
                            <img className="project-img" src="images/project1.jpg" alt="" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h3 className="project-description">Rock-Paper-Scissor</h3>
                        <p className="project-summary">A simple Rock-Paper-Scissor game
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img_container">
                        <a href="https://habibzad.github.io/gpa-calculator/" rel="noreferrer" target="_blank">
                            <img className="project-img" src="images/project2.jpg" alt="" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h3 className="project-description">GPA Calculator</h3>
                        <p className="project-summary">Basic GPA Calculator</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img_container">
                        <a href="https://codepen.io/amhabibzad/full/KKMOrWQ" rel="noreferrer" target="_blank">
                            <img className="project-img" src="images/project3.jpg" alt="" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h3 className="project-description">Digital Clock</h3>
                        <p className="project-summary">Digital Clock</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img_container">
                        <a href="https://habibzad.github.io/inspirational-quotes/" rel="noreferrer" target="_blank">
                            <img className="project-img" src="images/project4.jpg" alt="" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h3 className="project-description">Random quotes</h3>
                        <p className="project-summary">Random quotes</p>
                    </div>
                </div>
                <div className=" project">
                    <div className="project-img_container">
                        <a href="https://habibzad.github.io/to-do-list/" rel="noreferrer" target="_blank">
                            <img className="project-img" src="images/todo.jpg" alt="" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h3 className="project-description">To-Do List</h3>
                        <p className="project-summary">A simple To-Do List
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img_container">
                        <a href="https://codepen.io/amhabibzad/full/OJRNPoP" rel="noreferrer" target="_blank">
                            <img className="project-img" src="images/project6.jpg" alt="" />
                        </a>
                    </div>
                    <div className="project-title">
                        <h3 className="project-description">Weather App</h3>
                        <p className="project-summary">Weather App</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
