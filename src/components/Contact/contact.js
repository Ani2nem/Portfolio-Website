import "./contact.css"
import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

const Contact = () =>{

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y0n53x3', 'template_x9zbji6', form.current, 'qO4OpxNfUG01EON73tw6X')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section className="contactSection" id="Contact">
            <h1 className="contact-title">Contact</h1>
            <span className="contact-subtitle">Please fill out form below to discuss any work opportunities</span>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                <input type="text" className="email" placeholder="Your Email" name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value='Send' className="submitBtn">Submit</button>
                <p className="email-text">anirudh.nemmani@yahoo.com</p>
            </form>
        </section>
    )
}

export default Contact