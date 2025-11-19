'use server'
import * as globalStyles from '../../styles/app.module.css';
import Article from '../global/Article';
import HomeWorkItem from './HomeWorkItem';
import * as styles from './homeWorks.module.css';
import {Icon} from '@iconify/react'
import HomeWorkScrollElem from './HomeWorkScrollElem';

const HomeWorks = async () => {
    class Work {
        constructor(name, img) {
            this.text = name;
            this.image = img;
        }
    }
    const defaultState = [
        new Work('Европейская сервисная компания', 'esk.png'), new Work('Grigof Jewels House', 'grigof.png'), new Work('СТО лодок', 'STO_lodok.png'),
        new Work('YANADRIVE. Прокат автомобилей', 'YANADRIVE.png'), new Work('Союз каменных мастерских', 'pamyatnik.png')
    ]
    let works = [...defaultState];
    return (
        <div className={globalStyles.block}>
            <Article style={{marginBottom: 0}} heading='наши работы' />
            <div className={styles.container}>
                {works.map((item,ind)=>(
                    <HomeWorkItem port={port} host={host} sec={sec} text={item.text} image={item.image} key={item.text} />
                ))}
            </div>
            <HomeWorkScrollElem />
        </div>
    )
}

export default HomeWorks