import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="avatar">
        <img src="images/profile1.jpg" alt="" />
      </div>
      <div class="content">
        <h1 class="main-title">Ahmad Habibzad</h1>
        <h2 class="main-title main-title-secondary">
          Fullstack Java Developer
        </h2>
        <p class="body-txt">
          Hi, welcome to my porfolio website! I am a full stack Java developer.
        </p>
        <a href="#contact" class="cnt-btn">
          Get In Touch
        </a>
      </div>
    </div>
  );
}

export default Home;
