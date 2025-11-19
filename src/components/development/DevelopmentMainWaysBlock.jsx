
import * as styles from './devMainWays.module.css';
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from '../about/AboutBlockHeading';
import { Icon } from '@iconify/react/dist/iconify.js';
import * as motion from 'motion/react-client';
import DevWays from '../global/services/DevWays';
import { Item } from '@/utils/mainWaysItem.util';

const DevelopmentMainWaysBlock = () => {
    const items = [
        new Item('Индивидуальный дизайн',"svg-spinners:blocks-shuffle-3"),new Item('Чистый код и скорость','famicons:code'),
        new Item('Интеграции с системами','icon-park-outline:upload-computer'), new Item('Поддержка после запуска','streamline:customer-support-1-solid')
    ]

    return(
        <div className={globalStyles.block}>
            <AboutBlockHeading text={'Наш подход'} style={{color: 'white',paddingLeft:'7vw'}} weight={800}/>
            <DevWays items={items}/>
        </div>
    )
}

export default DevelopmentMainWaysBlock;