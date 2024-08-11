import React from 'react'
import { Contact } from '../components/contact/Contact'
import '../styles/contactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <h1>GET IN TOUCH!</h1>
            <p>Thank you for your interest in our services! </p>
            <p>Let's get the conversation started. Tell us a bit about yourself, and we will get right back to you!</p>
            <div className="container">
                <Contact />
            </div>
            <div className='google-maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg" frameborder="0" style={{ border: 0 }} allowfullscreen="" title='google-maps'></iframe>
            </div>
        </div>
    )
}

export default ContactUs