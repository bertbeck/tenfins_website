import { useEffect, useState, React } from 'react'
import { TestimonialsData } from './TestimonialsData'
import logo from '../media/circularLogo.png'
import '../styles/testimonials.css'

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = TestimonialsData.length;

  const autoScroll = true;
  let slideInterval;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function autoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className='testimonials'>
      <h1>Testimonials</h1>
      <p>Reviews Left By Some Of Our Customers</p>

      <div className="reviews">
        {TestimonialsData.map((data, index) => {
          return (
            <div className={index === currentSlide ? 'slide-review current-review' : 'slide-review'} key={index}>
              {index === currentSlide && (
                <>
                  <img src={logo} alt='logo' className='circularLogo' />
                  <div className="comment">
                    <h3>{data.author}</h3>
                    <h4>{data.position}</h4>
                    <p>{data.comment}</p>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div >
  )
}
