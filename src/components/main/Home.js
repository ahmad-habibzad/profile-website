import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="avatar">
        <img src="images/profile1.jpg" alt="" />
      </div>
      <div className="content">
        <h1 className="main-title">Ahmad Habibzad</h1>
        <h2 className="main-title main-title-secondary">
          Fullstack Java Developer
        </h2>
        <p className="body-txt">
          Hi, welcome to my porfolio website! I am a full stack Java developer.
        </p>
        <a href="#contact" className="cnt-btn">
          Get In Touch
        </a>
      </div>
    </div>
  );
}

export default Home;
