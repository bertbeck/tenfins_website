import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'

export const ContactCard = () => {
    return (
        <>
            <div className="navbar-contact-card">
                <ul className="navbar-contact-card-ul">
                    <li className="navbar-contact-card-li">
                        <h3>Call us now</h3>
                        <p><Link to="tel:+1 (214) 677-8874">+1 (214) 677-8874</Link> </p>
                    </li>
                    <li className="navbar-contact-card-li">
                        <h3>Let's Discuss</h3>
                        <p><Link to="mailto:mysecundafintech@gmail.com">mysecundafintech@gmail.com</Link> </p>
                    </li>
                    <li className="navbar-contact-card-li">
                        <h3>Location</h3>
                        <label>
                            <p>
                                Dallas, Texas, United States
                            </p>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="navbar-social">
                <ul className="navbar-social-ul">
                    <li className="navbar-social-li"><Link to="https://www.facebook.com/MySecunda2" target="_blank"><AiIcons.AiFillFacebook /></Link></li>
                    <li className="navbar-social-li"><Link to="/" target="_blank"><AiIcons.AiFillTwitterSquare /></Link></li>
                    <li className="navbar-social-li"><Link to="/" target="_blank"><AiIcons.AiFillLinkedin /></Link></li>
                    <li className="navbar-social-li"><Link to="https://www.instagram.com/mysecunda/" target="_blank"><AiIcons.AiFillInstagram /></Link></li>
                </ul>
            </div>
        </>
    )
}
