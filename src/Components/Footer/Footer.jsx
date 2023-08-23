// import React, { useState } from "react";
import "./Footer.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0i8x8lb', 'template_g3vf5rn', form.current, 'uOsqSintmsx8Z5vtH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <footer>
      <form className="form_btn color-#FFFFFF" ref={form} onSubmit={sendEmail} id="footer" >
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="btn" type="submit" value="Send" />
      </form>
    </footer> 
      
      
  );
};

export default ContactUs;
