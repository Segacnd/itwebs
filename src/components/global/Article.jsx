'use client'
import React from 'react';
import { useEffect, useRef } from 'react';
import * as globalStyles from '../../styles/app.module.css';

const Article = (props) => {
    const obj = {}
    obj[props.heading]= useRef();
    useEffect(() => {
        if (obj[props.heading].current && window.scrollY >= obj[props.heading].current.getBoundingClientRect().top && window.scrollY <= (obj[props.heading].current.getBoundingClientRect().top + window.innerHeight*5))
            obj[props.heading].current.style.animationPlayState = 'running';
        else
            window.addEventListener("scroll", function () {
                if (obj[props.heading].current && window.scrollY >= obj[props.heading].current.getBoundingClientRect().top && window.scrollY <= (obj[props.heading].current.getBoundingClientRect().top + window.innerHeight*5)) {
                    obj[props.heading].current.style.animationPlayState = 'running';
                    window.removeEventListener("scroll", this);
                }
            })
    }, []);
    return (
        <>
            <div style={{...props.style}} className={globalStyles.articleContainer}>
                <h2 ref={obj[props.heading]} className={globalStyles.article}>{props.heading}</h2>
            </div>
        </>
    )
}

export default Article;