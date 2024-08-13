import { React } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { HireUsData1, HireUsData2 } from './HireUsData';

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 1 },
    number: n,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 }
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const HireUs = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 3,
      }
    }
  };

  return (
    <motion.div className='hire-us'
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
    // custom={1}
    >
      <h2>WHY DO YOU NEED TO HIRE <font color='#3fb43d'>Tenfins</font> ?</h2>
      <div className="card-box">
        <ul>
          {HireUsData1.map((item, index) => {
            return (
              <li className='card' key={index}>
                <div>{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className='desc'>{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <ul>
          {HireUsData2.map((item, index) => {
            return (
              <li className='card' key={index}>
                <div>{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className='desc'>{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="data" >
        <ul>
          <li className='numbers'>
            <h2><Number n={200} />+</h2>
            <h5>Global Clients</h5>
          </li>
          <li className='numbers'>
            <h2><Number n={500} />+</h2>
            <h5>Products (Apps) Delivered</h5>
          </li>
          <li className='numbers'>
            <h2><Number n={1400} />+</h2>
            <h5>Hours Of Support</h5>
          </li>
          <li className='numbers'>
            <h2><Number n={5} />+</h2>
            <h5>Creative Nerds </h5>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default HireUs;
