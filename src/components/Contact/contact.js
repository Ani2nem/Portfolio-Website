import React from 'react'
import "./contact.css"

const Contact = () =>{
    return (
        <section className="contactSection">
            <h1 className="contact-title">Contact</h1>
            <span className="contact-subtitle">Please fill out form below to discuss any work opportunities</span>
            <form className="contact-form">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="text" className="email" placeholder="Your Email"/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value='Send' className="submitBtn">Submit</button>
            </form>
        </section>
    )
}

export default Contact