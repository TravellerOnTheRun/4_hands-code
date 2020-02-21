import React, { useState, useEffect } from 'react';

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
            <Button ownStyle='btn-next' clicked={nextSlide}>Next</Button>
            {props.children}
            <Button ownStyle='btn-previous' clicked={previousSlide}>Previous</Button>
        </div>
    );
};

export default Slider;