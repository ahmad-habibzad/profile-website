import React from "react";

function Contact() {
  return (
    <div className="section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="form-container">
        <div className="form-div">
          <form
            className="form"
            id="form1"
            action="https://formspree.io/f/xayldoed"
            method="POST"
          >
            <label className="name" htmlFor="name">
              <input
                name="name"
                type="text"
                className="feedback-input"
                placeholder="Name"
                id="name"
                required
              />
            </label>
            <label className="email" htmlFor="email">
              <input
                name="email"
                type="email"
                className="feedback-input"
                id="email"
                placeholder="Email"
                required
              />
            </label>
            <label className="text">
              <textarea
                name="text"
                className="feedback-input"
                id="comment"
                placeholder="Message"
                required
              ></textarea>
            </label>
            <input type="submit" value="Send Message" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
