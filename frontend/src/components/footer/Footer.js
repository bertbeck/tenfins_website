import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import './assets/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-content">
                    <h3>Our Newsletter</h3>
                    <p>
                        Stay informed about our upcoming updates and information about how we can help you to financial freedom with our upcoming mobile app!
                    </p>
                </div>
                <div className="subs-btn">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Email'>
                    </input>
                    <button>Subscribe</button>
                </div>

            </div>
            <div className="footer-bottom">
                <div id="about">
                    <h3>About MySecunda</h3>
                    <p>We aim to grow into becoming a leader in the Fintech Industry. From our in company leadership, you will find all your answers at MySecunda. Our ability to connect human insights with advanced, cutting-edge technology helps our clients realize the potential of infinite possibilities and make them a reality.</p>
                </div>
                <div id="our-services">
                    <h3>Our Services</h3>
                    <ul>
                        <li><Link to="/android-app-development"><AiIcons.AiOutlineRight /> Android App Development</Link></li>
                        <li><Link to="ios-app-development"><AiIcons.AiOutlineRight /> IOS App Development</Link></li>
                        <li><Link to="python-backend-development"><AiIcons.AiOutlineRight /> Python Backend Development</Link></li>
                        <li><Link to="/data-science-automation"><AiIcons.AiOutlineRight />Data Science And Automation</Link></li>
                        <li><Link to="/blockchain"><AiIcons.AiOutlineRight />Blockchain</Link></li>
                        <li><Link to="/digital-marketing"><AiIcons.AiOutlineRight />Digital Marketing</Link></li>
                    </ul>
                </div>
                <div id="contact-us">
                    <h3>Contact Us</h3>
                    <p> 
                        <ImLocation /> Dallas, Texas, United States
                        <br />
                        <Link to="mailto:mysecundainfotech@gmail.com" className='mail'><AiIcons.AiOutlineMail /> Mail Us</Link>
                        <div className="social-links">
                            <h4>Follow Us on &nbsp;</h4>
                            <p>
                                <Link to="https://www.facebook.com/MySecunda2" target="_blank"><AiIcons.AiFillFacebook className='icon' style={{ 'color': '#0866FF' }} /></Link>
                                <Link to="https://www.instagram.com/mysecunda/" target="_blank"><AiIcons.AiFillInstagram className='icon' style={{ 'color': '#d62976' }} /></Link>
                            </p>
                        </div>
                    </p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; Copyright <strong>MySecunda</strong>. All Rights Reserved</p>
                <p>Designed by <Link to="https://MySecunda.com/">MySecunda</Link></p>
            </div>
        </div>
    )
}

export default Footer