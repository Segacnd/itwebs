'use server'
import * as styles from './about.module.css';
import * as globalStyles from '../../styles/app.module.css';
import * as motion from 'motion/react-client';
import AboutWorthItem from './AboutWorthItem';
import AboutBlockHeading from './AboutBlockHeading';
import { loadWorths } from '@/services/loadWorths.service';
import Broken from '../global/Broken';

const AboutWorthsBlock = async () => {
    const defaultWorths = [
        { name: 'Просто', icon:'iconoir:cube', description: 'Мы не нагромождаем—только то, что нужно клиенту' }, { name: 'Быстро', icon:'nimbus:rocket', description: 'Мы умеем быстро запускать сайт без потери качества' },
        { name: 'Умно', icon:'hugeicons:brain', description: 'Каждое решение—по делу. Без “красоты ради красоты”' }, { name: 'Честно', icon:'lucide:handshake', description: 'Говорим напрямую. Объясняем. Не прячемся за терминами' 
        }];
    
    let worths = [];
    worths = await loadWorths();
    if (worths === null)
        worths = [...defaultWorths];
    return (
        <div className={[globalStyles.block, globalStyles.headerMargin,styles.mobilePaddingLeft].join(' ')} style={{ marginTop: '10svh' }}>
            <AboutBlockHeading text='Ценности/подход' />
            <div style={{ width: '88vw', display: 'flex', flexDirection: 'column', height: 'fit-content', alignItems:'center' }}>
                <div className={styles.worthsContainer}>
                    {
                        worths.slice(0, 4).map((item, ind) => (
                            <AboutWorthItem key={ind + 1} id={ind} name={item.name} icon={item.icon} description={item.description} delay={ind} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutWorthsBlock;