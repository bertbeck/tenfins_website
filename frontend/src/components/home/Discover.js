import React from 'react';
import { FlipCardItems } from './FlipCardItems';
import { motion } from 'framer-motion';

export const Discover = () => {
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
        <motion.div className='discover'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'>
            <div className="container1">
                <h2>EXPLORE THE RANGE OF APP DEVELOPMENT SERVICES AT <font color='#3fb43d'>MySecunda </font> 🚀</h2>
                <p>From concept to deployment, we offer end-to-end solutions that encompass mobile apps, web apps, and more. Whether you're a startup, an enterprise, or an individual entrepreneur, we've got the expertise and creativity to craft apps that stand out in the digital landscape.</p>
                <p>Explore the endless possibilities with <strong><font color='#3fb43d'>MySecunda ! </font></strong> Let's turn your app ideas into reality!</p>
            </div>
            <div className="container2">
                {FlipCardItems.map((item, index) =>
                    <div className="card-section">
                        <div className="flip-card">
                            <div className="front">
                                <img src={item.image} alt="" />
                                <h3>{item.title}</h3></div>
                            <div className="back">
                                <h4>{item.title}</h4>
                                <p>{item.desc1}</p>
                                <p>{item.desc2}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </motion.div>
    )
}
