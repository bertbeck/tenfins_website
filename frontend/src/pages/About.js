import { React } from 'react'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { Testimonials } from '../components/Testimonials';
import ProgressBar from '../components/ProgressBar';
import '../styles/aboutUs.css'

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 1 },
    number: n,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 }
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div className='about-us'>
      <div className="bg-container">
        <h1>ABOUT US</h1>
        <div className="container">
          <div className="column1">
            <p>Connecting with clients on a more personal level has been our forefrong of how Mysecunda has been operating past 3 years. The depth and breadth of the Tenfins team, our focus on forming stronger, collaborative relationships, and our legacy of examining the finest details reveal new perspectives for our clients. Our ability to connect human insights with advanced, cutting-edge technology helps our clients realize the potential of infinite possibilities and make them a reality.</p>
          </div>
          <div className="column2">
            <ul>
              <li> <AiOutlineCaretRight /> Using Data To Grow Your Business.</li>
              <li> <AiOutlineCaretRight /> Data Science To Make Smart Business Decisons.</li>
              <li> <AiOutlineCaretRight /> Market Research Analysis</li>
            </ul>
            <p>The future of work is changing. Our case studies offer a window into how Mysecunda is helping innovate some of the world’s best fast growing organizations and helping to create a connected workforce through data science!</p>
          </div>
        </div>

        <div className="ratings">
          <h2>Our Percent Ratings</h2>
          <p>We aim to grow our ratings up over 100%</p>
          <div className="progress-bar-box">
            <ProgressBar text='MAX RETURN' percent={100} />
            <ProgressBar text='COMMUNICATION' percent={100} />
            <ProgressBar text='CLIENT SATISFACTION' percent={96} />
            <ProgressBar text='ACCEPTED CONSULATIONS' percent={80} />
          </div>
        </div>
      </div>

      <div ref={ref} className="data" >
        {inView &&
          <ul>
            <li className='about-us-numbers'>
              <h2><Number n={232} /></h2>
              <h5>Global Clients</h5>
            </li>
            <li className='about-us-numbers'>
              <h2><Number n={521} /></h2>
              <h5>Projects Delivered</h5>
            </li>
            <li className='about-us-numbers'>
              <h2><Number n={1463} /></h2>
              <h5>Hours Of Support</h5>
            </li>
            <li className='about-us-numbers'>
              <h2><Number n={5} /></h2>
              <h5>Creative Nerds </h5>
            </li>
          </ul>
        }
      </div>
      <Testimonials />
    </div >
  )
}

