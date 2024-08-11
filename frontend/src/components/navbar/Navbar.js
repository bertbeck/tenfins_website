import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { NavbarData } from './NavbarData';
import { ContactCard } from './ContactCard';
import SubMenu from './SubMenu';
import './assets/navbar.css';
import companyLogo from './assets/companyLogo.png';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' }
}

const Navbar = () => {
  const [show, setShow] = useState(false);
  const closeNavbar = () => {
    setShow(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: 'var( --navIcons)' }}>

        <motion.nav
          animate={show ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <motion.div className='inner-nav'>
            <div className='menu'>
              {NavbarData.map((item, index) => {
                return <SubMenu item={item} key={index} closeNavbar={closeNavbar} />

              })}
            </div>
            <div className="navbar-contact">
              <ContactCard />
            </div>
          </motion.div>
        </motion.nav>

        <motion.button
          className='toggle'
          onClick={() => setShow(show => !show)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconContext.Provider value={{ color: 'var( --white)' }}>
            {show ? <AiOutlineClose /> : <FaBars />}
          </IconContext.Provider>
        </motion.button>

        <img className="company-logo" src={companyLogo}></img>

      </IconContext.Provider>

    </>
  )
}

export default Navbar