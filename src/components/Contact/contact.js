import "./contact.css"
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{

    const form = useRef();

    useEffect(() => {
        // Initialize EmailJS with your user ID
        emailjs.init('user_ifTHd4HcJTlpmBvKs');
    }, []);

    const sendEmail = async (e) => {
    e.preventDefault();
    const payload = {
        name: e.target.from_name.value,
        email: e.target.from_email.value,
        message: e.target.message.value
    };

    try {
        const res = await fetch("https://YOUR_API_GATEWAY_URL.amazonaws.com/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
        });

        if (res.ok) {
        alert("Email sent! ✅");
        e.target.reset();
        } else {
        alert("Failed to send email ❌");
        }
    } catch (err) {
        console.error(err);
        alert("Network error ❌");
    }
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