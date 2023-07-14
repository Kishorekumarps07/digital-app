import React from 'react';
import './ContactUs.css';

export const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Query Has Been Successfully Sent");
    
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div className="button-contact">
        <button type="submit" className="button-contact">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
