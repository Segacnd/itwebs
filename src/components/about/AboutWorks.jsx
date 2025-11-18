"use client"

import * as homeStyles from '../../components/home/homeWorks.module.css';
import * as globalStyles from '../../styles/app.module.css';
import * as styles from './about.module.css';
import HomeWorkItem from '../home/HomeWorkItem';
import HomeWorkScrollElem from '../home/HomeWorkScrollElem';
import AboutBlockHeading from './AboutBlockHeading';
import { useEffect, useState } from 'react';

const AboutWorks = () => {
    class Work {
        constructor(name, img) {
            this.text = name;
            this.image = img;
        }
    }
    const defaultState = [
        new Work('Европейская сервисная компания', 'esk.webp'), new Work('Grigof Jewels House', 'grigof.webp'), new Work('СТО лодок', 'STO_lodok.webp'),
        new Work('YANADRIVE. Прокат автомобилей', 'YANADRIVE.webp'), new Work('Союз каменных мастерских', 'pamyatnik.webp')
    ]
    const works = [...defaultState]
    let [wind,setWind] = useState(null)
    useEffect(()=>{
        setWind(window)
    },[])
    return (
        <div id='works' className={[globalStyles.block,globalStyles.headerMargin, homeStyles.block].join(' ')} style={{marginBottom:'10svh'}}>
            <AboutBlockHeading style={{alignSelf:'flex-end',marginBottom:wind&&wind.innerWidth>900?'10svh':'0', paddingLeft:'7vw'}} text='познакомьтесь с нашим портфолио'/>
            <div className={homeStyles.container} style={{ marginTop:wind&&wind.innerWidth<=900?'5svh':'', height:wind&&wind.innerWidth<=900?'max-content':'' }}>
                {works.map((item,ind) => (
                    <HomeWorkItem text={item.text} image={item.image} key={item.image} />
                ))}
            </div>
            <HomeWorkScrollElem styles={{top: '-2vh',left: '5vw'}} />
        </div>
    )
}

export default AboutWorks;