import React, { useState, useEffect } from 'react';
import './Slider.css';

import Button from '../../../../Reusables/Button/Button';

const Slider = props => {
    const [slides, setSlides] = useState([
        'default',
        'Custom Design',
        'Content Creation',
        'Copywriting',
        'SEO',
        'Project Management',
        'Testing and Training',
        'Consultations'
    ]);
    const [curSlide, setCurSlide] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if(curSlide >= 0 && curSlide !== slides.length -1) {
                setCurSlide(curSlide + 1); 
            };
            if(curSlide === slides.length - 1) {
                setCurSlide(0);
            };
        }, 5000);
    }, [curSlide]);

    useEffect(() => {
        props.onChangeSlide(slides[curSlide]);
    }, [curSlide]);

    const nextSlide = () => {
        if(curSlide === slides.length - 1) {
            setCurSlide(0);
            return;
        };
        setCurSlide(curSlide + 1);
    };
    const previousSlide = () => {
        if(curSlide === 0) {
            setCurSlide(slides.length -1);
            return;
        }
        setCurSlide(curSlide - 1);
    };

    return (
        <div className='slider'>
            <div className='layer'></div>
            <Button ownStyle='btn-next' clicked={nextSlide}>
                {/* <span></span> */}
                <span></span>
            </Button>
            {props.children}
            <Button ownStyle='btn-previous' clicked={previousSlide}>
                {/* <span></span> */}
                <span></span>
            </Button>
        </div>
    );
};

export default Slider;