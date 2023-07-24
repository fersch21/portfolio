import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [validate, setValidate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput && !emailInput && !messageInput) {
      setValidate("inputError");
    }

    if (!nameInput) {
      setValidate("inputError");
    } else if (!emailInput) {
      setValidate("inputError");
    } else if (!messageInput) {
      setValidate("inputError");
    } else {
      setValidate("inputSuccess");
    }
  };

  return (
    <footer>
      {/* circle span */}
      <div className="circle"></div>

      <h1>get in touch</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="inputs">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className={`nameInput ${validate}`}
              type="text"
              name="name"
            />
            <input
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className={`emailInput ${validate}`}
              type="email"
              name="email"
            />
          </div>
          <div className="messageBox">
            <textarea
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className={`messageInput ${validate}`}
              name="massage"
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="form_btn">
          <button className="btn">submit</button>
        </div>
      </form>
      
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

      <script type="text/javascript">
        emailjs.init('uOsqSintmsx8Z5vtH')
      </script>

      <p className="copyright">
        &copy; Designed and Developed by ® Fer Sch. 2023
      </p>
    </footer>
  );
};

export default Footer;
