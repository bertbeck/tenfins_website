import { React, useState, useEffect } from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { SliderData } from './SliderData';
import './assets/slider.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderData.length;

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
        <div className='slider'>
            <FaLessThan className='arrow prev' onClick={prevSlide} />
            <FaGreaterThan className='arrow next' onClick={nextSlide} />

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? 'slide current' : 'slide'} key={slide.id}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide" />
                                <div className="slider-content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    {/* <button className="btn btn-100">Get started</button> */}
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default Slider;