import React from "react";

function Home() {
    return (<div className="home">
            <div className="avatar">
                <img src="images/profile1.jpg" alt=""/>
            </div>
            <div className="content">
                <h1 className="main-title">Ahmad Habibzad</h1>
                <h2 className="main-title main-title-secondary">
                    Java Developer
                </h2>
                <p className="body-txt">
                    Hi, my name is Ahmad. I am a Java developer, QA Automation Engineer and Technology Enthusiast. I currently work as a
                    Technical Advisor for <a style={{color:"#64ffda"}} href="https://meritamerica.org/team/ahmad-habibzad/" target="_blank">Merit America</a>
                </p>
                <p>Feel free to reach out—I'm excited about the opportunity to collaborate and contribute to meaningful
                    projects. </p><br/>
                <a href="#contact" className="cnt-btn">
                    Get In Touch
                </a>
            </div>
        </div>);
}

export default Home;
