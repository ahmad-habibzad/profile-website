import React from 'react'

function Contact() {
    return (
        <div className="section" id="contact">
            <h2 class="section-title">Contact Me</h2>
            <div class="form-container">
                <div class="form-div">
                    <form class="form" id="form1" action="https://formspree.io/f/xayldoed" method="POST">
                        <label class="name" for="name">
                            <input name="name" type="text" class="feedback-input" placeholder="Name" id="name" required />
                        </label>
                        <label class="email" for="email">
                            <input name="email" type="email" class="feedback-input" id="email" placeholder="Email" required />
                        </label>
                        <label class="text">
                            <textarea name="text" class="feedback-input" id="comment" placeholder="Message" required></textarea>
                        </label>
                        <input type="submit" value="Send Message" class="submit-btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
