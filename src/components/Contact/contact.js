import "./contact.css"
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{

    const form = useRef();

    useEffect(() => {
        // Initialize EmailJS with your user ID
        emailjs.init('user_ifTHd4HcJTlpmBvKs');
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y0n53x3', 'template_x9zbji6', form.current, 'ifTHd4HcJTlpmBvKs')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="contactSection">
            <h1 className="contact-title" id="Contact">Contact</h1>
            <span className="contact-subtitle">Please fill out form below to discuss any work opportunities</span>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='from_name'/>
                <input type="text" className="email" placeholder="Your Email" name='from_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value='Send' className="submitBtn">Submit</button>
                <p className="email-text" >anirudh.nemmani@yahoo.com</p>
            </form>
        </div>
        
    )
}

export default Contact