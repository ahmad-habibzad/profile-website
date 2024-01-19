import React from "react";

function SocialIcons() {
  return (
    <div className="social-Icons">
      <ul className="social-media-list list flex">
        <li className="social-media-list-item">
          <a
            className="social-link link"
            href="https://twitter.com/MasKbl66"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
       <li className="social-media-list-item">
          <a
            className="social-link link"
            href="https://codepen.io/ahmadm88"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-codepen"></i>
          </a>
        </li>
        <li className="social-media-list-item">
          <a
            className="social-link link"
            href="https://github.com/ahmad-techie/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-media-list-item">
          <a
            className="social-link link"
            href="https://www.linkedin.com/in/ahmad-habibzad/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
