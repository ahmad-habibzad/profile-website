import React from 'react'

function Skills() {
    return (
        <div className="section skills flex" id="skills">
            <div className="skills-wrapper">
                <h2 className="section-title">skills & tools</h2>
                <p className="skills-para">The tools and technologies I am comfortable with:</p>
                <div className="skill-container flex">
                    <div className="skill">
                        <i className="fab fa-java fa-skills"></i>
                        <h2 style={{ marginTop: '10px' }}>Java</h2>
                        <p >I use Java and Spring Boot to create REST APIs. I write clean and well-formatted code that is easy to read, trouble-shoot and
                            maintain.</p>
                        {/* <p>I write clean, well formatted, semantic HTML5 making sure it is easy to read, trouble-shoot and
                            maintain.</p> */}
                    </div>
                    <div className="skill">
                        <i className="fab fa-react fa-skills"></i>
                        <h2 style={{ marginTop: '10px' }}>React</h2>
                        <p>I build user interfaces using ReactJS. Additionally, I use CSS current best practices to build responsive websites.</p>
                        {/* <p>Using CSS current best practices such as media queries and flex box, my focus is to build pixel perfect
                            and responsive websites.</p> */}
                    </div>
                    <div className="skill">
                        <i className="fas fa-database fa-skills"></i>
                        <h2 style={{ marginTop: '10px' }}>MySQL</h2>
                        <p>Together with Spring Data JPA, I use MySQL to build databases for my web applications.</p>
                        {/* <p>In addition to using Javascript to make my website dynamic, I use JavaScript for creating small scale
                            web applications.</p> */}
                    </div>
                </div>
                <div className="tools">
                    <h3 className="sub-title">Other Skills:</h3>
                    <p className="skills-para">The following are some other tools and technologies I use to bring my projects to life:</p>
                    <div className=" tools-container">
                        <i className="fab fa-html5 far-skills"></i>
                        <p>HTML5</p><br />
                        <i className="fab fa-css3-alt far-skills"></i>
                        <p>CSS3</p><br />
                        <i className="fab fa-js-square far-skills"></i>
                        <p>JavaScript</p><br />
                        <i className="fab fa-bootstrap far-skills"></i>
                        <p>Bootstrap</p><br />
                        <i class="fab fa-git-square far-skills"></i>
                        <p>Git</p><br />
                        <i className="fab fa-github-square far-skills"></i>
                        <p>GitHub</p><br />
                        <span className="iconify far-skills" data-icon="bi:terminal-fill" data-inline="false"></span>
                        <p>Terminal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
