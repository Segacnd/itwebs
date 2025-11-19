'use client'
import { useEffect, useState } from 'react';
import * as globalStyle from '../../styles/app.module.css';
import Article from '../global/Article';
import * as styles from './homeTech.module.css';
import { Icon } from '@iconify/react';
import MobileTech from '../global/MobileTech';
import TechComponent from '../global/TechComponent';

const HomeTechBlock = () => {
    return (
        <>
            <div className={[globalStyle.block,styles.block].join(' ')}>
                <Article heading={'Используемые технологии'} />
                <TechComponent />
            </div>
        </>
    )
}

export default HomeTechBlock