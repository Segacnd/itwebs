'use client'

import * as styles from './homeWorks.module.css';
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const HomeWorkScrollElem = ({styles}) => {
    const [width, setWidth] = useState(0);
    const [wind, setWind] = useState(null);
    const [height, setHeight] = useState(0);
    const ref = useRef();
    useEffect(() => {
        setWind(window)
        if (window && window.innerWidth < 900 && ref.current && window.scrollY + 500 < ref.current.getBoundingClientRect().top) {
            setWidth('25vw');
            setHeight('25vw');
        }
    }, [])
    return (
        <>
            {wind && wind.innerWidth <= 900 && <Icon  className={styles.HomeWorkScrollElem} ref={ref} style={{ alignSelf: 'center', position: 'relative', top: '-15svh', zIndex: 15, ...styles }} color="white" icon="streamline-plump:tailless-line-arrow-horizonal-scroll-remix" width={width} height={height} />}
        </>
    )
}

export default HomeWorkScrollElem;