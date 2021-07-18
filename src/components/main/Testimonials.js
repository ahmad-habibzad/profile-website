import React from "react";

function Testimonials() {
  return (
    <div className="section skills flex" id="testimonials">
      <div className="testimonials-wrapper">
        <h2 className="section-title">Testimonials</h2>
        <div className="tst1">
          <div className="testimonials-container">
            <p className="test-para">
              <i class="fas fa-quote-left q1"></i>
              Ahmad is one of those thoughtful, intuitive developers who takes
              time to study the "what" and the "why" in addition to the "how".
              His knowledge of Java and OOP is impressive as well as his ability
              to problem solve, but what really stands out to me is his capacity
              to imagine what his users want and need and this is evident in all
              of the frontend UIs in his projects.
              <i class="fas fa-quote-right q1"></i>
            </p>
          </div>
          <div className="img-container">
            <img className="testimonial-img" src="images/Sadiq.jpg" alt="" />
            <h4>
              <b>Sadiq Manji</b>
              <a
                href="https://www.linkedin.com/in/sadiq-manji-1a61a59/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fas fa-external-link-alt lnk1"></i>
              </a>
            </h4>
            <h4>
              <i>Senior Consultant</i>
            </h4>
            <small>SAP Ariba</small>
          </div>
        </div>
        <div className="tst2">
          <div className="testimonials-container">
            <p className="test-para">
              <i class="fas fa-quote-left q1"></i>
              Ahmad was one of the top students in the Java Development Bootcamp
              at Merit America. During the program, he demonstrated excellent
              ability to learn and understand new concepts, work in different
              teams, and help other students. He led the team with the agile
              methodology approach, which led to successful completion of the
              project. The project itself, Bank Application, was very complex
              and required good understanding of software technologies
              (Java/Spring, ReactJS) as well as understanding about how the Bank
              Application works. It was a pleasure working with him.
              <i class="fas fa-quote-right q1"></i>
            </p>
          </div>
          <div className="img-container">
            <img
              className="testimonial-img"
              src="images/Srdan.JPG"
              alt="Srdan"
            />
            <h4>
              <b>Srdan Atanaskovic</b>
              <a
                href="https://www.linkedin.com/in/srdjanatanaskovic/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fas fa-external-link-alt lnk1"></i>
              </a>
            </h4>
            <h4>
              <i>Software Engineer</i>
            </h4>
            <small>Western Digital</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
