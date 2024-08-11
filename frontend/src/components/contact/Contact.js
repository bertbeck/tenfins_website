import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, a } from 'react-spring'
import { ContactForm } from './ContactForm'
import contactIcon from './assets/contactIcon.png'
import './assets/contact.css'

export const Contact = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const calc = (x, y) => [
    (y - window.innerHeight / 2) / 100,
    (x - window.innerWidth / 2) / 100,
    1
  ]

  const handleMouseMove = (x, y) => {
    const data = calc(x, y);
    set({ xys: data });
  };
  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
  };

  const trans = (x, y, s) => `perspective(600px) rotate(${x}deg) rotateY(${y}deg) scale(${s})`

  const bgStyle = {
    'background': 'url(./assets/contactBg.jpg)'
  }

  return (
    <div className="contact-card-home" style={bgStyle}>
      <a.div id="contact-card"
        onMouseMove={({ clientX, clientY }) => handleMouseMove(clientX, clientY)}
        onMouseLeave={handleMouseLeave}
        style={{ transform: props.xys.to(trans) }}
      >
        <div id="contact-icon">
          <img src={contactIcon}></img>
        </div>
        <div id="contact-content">
          <div className="top">
            <h2>Have a brilliant app idea but don't know where to start? We've got you covered!</h2>
            <p>Our team of expert developers is here to help you every step of the way.</p>
          </div>
          <div className="bottom">
            <h4>CALL US</h4>
            <p><Link to="tel:+1 (214) 677-8874">+1 (214) 677-8874</Link></p>
            <br />
            <h4>MAIL US</h4>
            <p><Link to="mailto:mysecundafintech@gmail.com"><p style={{fontSize: '17px'}}>Click Here</p></Link></p>
          </div>
        </div>
      </a.div>
      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  )
}

