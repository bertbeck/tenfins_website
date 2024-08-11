import { React } from 'react';
import Slider from '../slider/Slider';
import HireUs from './HireUs';
import Marquee from './Marquee';
import { Discover } from './Discover';
import { Contact } from '../contact/Contact';
import './assets/home.css';

export const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <HireUs />
      <Discover />
      <Marquee />
      <Contact />
    </div>
  )
}
