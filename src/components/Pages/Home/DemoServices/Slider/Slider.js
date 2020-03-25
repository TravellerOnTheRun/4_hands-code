import React, { useState, useEffect, useCallback } from 'react';
import './Slider.css';

import Button from '../../../../Reusables/Button/Button';

const Slider = props => {
    const [slides] = useState([
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

    const { onChangeSlide } = props;

    const nextSlide = useCallback((currentSlide, slidesArray) => {
        if (currentSlide === slidesArray.length - 1) {
            setCurSlide(0);
        } else {
            setCurSlide(currentSlide + 1);
        };
    }, []);

    const previousSlide = useCallback((currentSlide, slidesArray) => {
        if (currentSlide === 0) {
            setCurSlide(slidesArray.length - 1);
        } else {
            setCurSlide(currentSlide - 1);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide(curSlide, slides)
        }, 5000)
        return () => {
            clearTimeout(timer);
        };
    }, [nextSlide, curSlide, slides]);

    useEffect(() => {
        onChangeSlide(slides[curSlide]);
    }, [curSlide, onChangeSlide, slides]);


    return (
        <div className='slider'>
            <div className='layer'></div>
            <Button ownStyle='btn-next' clicked={() => nextSlide(curSlide, slides)}>
                {/* <span></span> */}
                <span></span>
            </Button>
            {props.children}
            <Button ownStyle='btn-previous' clicked={() => previousSlide(curSlide, slides)}>
                {/* <span></span> */}
                <span></span>
            </Button>
        </div>
    );
};

export default Slider;