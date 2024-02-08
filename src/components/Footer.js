import React from 'react'

function Footer() {
    const date = new Date();
    const today = date.getFullYear();
    return (
        <footer className="footer">
            <div className="social-media">
                <ul className="social-media-list">
                    <li className="social-media-list-item">
                        <a className="social-link" href="mailto:ahmadhabibzad@gmail.com">
                            <i className="fas fa-envelope"></i>
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
                        <a className="social-link" href="https://www.linkedin.com/in/ahmad-habibzad/" rel="noreferrer" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    {/* <li className="social-media-list-item">
                        <a className="social-link" href="https://github.com/Habibzad" rel="noreferrer" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                    </li> */}
                </ul>
            </div>
            <p className="copy">{today} Habibzad</p>
        </footer>
    )
}

export default Footer
