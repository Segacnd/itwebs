
import * as styles from './mainWays.module.css';
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from '../about/AboutBlockHeading';
import DevWays from '../global/services/DevWays';
import { Item } from '@/utils/mainWaysItem.util';

const SocialMainWays = () => {
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

export default SocialMainWays;