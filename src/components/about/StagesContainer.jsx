'use client'

import { useEffect, useRef, useState } from 'react';
import * as styles from './about.module.css';
import * as motion from 'motion/react-client';
import HomeStageItem from '../home/HomeStageItem';
import AboutStageItem from './AboutStageItem';
import HomeWorkScrollElem from '../home/HomeWorkScrollElem';

const StagesContainer = ({ stages }) => {
    const [wind, setWind] = useState(null);
    let ref = useRef();
    useEffect(() => {
         window && setWind(window);
         window.addEventListener('scroll',function scrollContainer(){
            if(ref.current){
                ref.current.scrollLeft += 50;
                console.log(ref.current.scrollLeft)
                window.removeEventListener('scroll',scrollContainer);
            }
         })
    }, []);
    return (
        <>

            {
                wind && wind.innerWidth <= 900 ?
                    <div
                        className={styles.aboutSecStagesContainer}>
                        <div ref={ref} className={[styles.aboutSecStagesLine]}>
                            <div style={{width: '0vw'}}></div>
                            {
                                stages && stages.map(item => (
                                    <AboutStageItem key={item.id} num={item.id} name={item.name} text={item.text} />
                                ))
                            }
                            <div style={{width: '0vw',height:'50vw'}}></div>
                        </div>
                        <HomeWorkScrollElem styles={{top:'-2vh',left:'-28vw'}} />
                    </div>
                    :
                    <div
                        className={styles.aboutSecStagesContainer}>
                        <div className={[styles.aboutSecStagesLine]}>
                            {stages && stages.slice(0, 4).map((item, ind) => (
                                <AboutStageItem key={ind + 1} name={item.name} text={item.text} num={item.id} />
                            ))}
                        </div>
                        <div className={[styles.aboutSecStagesLine]}>
                            {stages && stages.slice(4, 8).map((item, ind) => (
                                <AboutStageItem key={ind + 1} name={item.name} text={item.text} num={item.id} />
                            ))}
                        </div>
                    </div>
            }
        </>

    )
}

export default StagesContainer;