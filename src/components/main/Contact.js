import React from "react";

function Contact() {
  const [responseStatus, setResponseStatus] = React.useState(false)
  const [contactInfo, setContactInfo] = React.useState({
    name: "",
    email:"",
    message: ""
  })

  function handleChange(e){
    setContactInfo(prevFormData =>{
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  function submitForm(e){
    e.preventDefault();
    handleSubmit()
    clearForm()
    alert("Thank you for your message! I will get back to you shortly")
  }

  function clearForm(){
    setContactInfo({name: "", email:"", message: ""})
  }

  function handleSubmit(){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "name": contactInfo.name,
      "email": contactInfo.email,
      "message": contactInfo.message
    });

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: body,
      redirect: 'follow'
    };

    fetch("https://formspree.io/f/xayldoed", requestOptions)
      .then(response => response.json())
      .then(data => setResponseStatus(data.ok))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="form-container">
        <div className="form-div">
          <form
            className="form"
            id="form1"
            // action="https://formspree.io/f/xayldoed"
            method="POST"
            onSubmit={submitForm}
          >
            <label className="name" htmlFor="name">
              <input
                name="name"
                type="text"
                className="feedback-input"
                placeholder="Name"
                id="name"
                value={contactInfo.name}
                required
                onChange={handleChange}
              />
            </label>
            <label className="email" htmlFor="email">
              <input
                name="email"
                type="email"
                className="feedback-input"
                id="email"
                placeholder="Email"
                value={contactInfo.email}
                required
                onChange={handleChange}
              />
            </label>
            <label className="text">
              <textarea
                name="message"
                className="feedback-input"
                id="comment"
                placeholder="Message"
                value={contactInfo.message}
                required
                onChange={handleChange}
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
