'use server'
import { loadSeoBlock } from '../../../services/loadSeoBlock.service';
import * as styles from './pageSeo.module.css';
import SeoItem from './SeoItem';
import WhyUsElem from './WhyUsElem';
import ConsultButton from '../../buttons/ConsultButton';
import { loadServiceSeoBlock } from '@/services/services/loadServiceSeoBlock';
import OldServiceSeoBlock from './OldServiceSeo';

const ServiceSeoBlock = async ({ link, dops, ways }) => {
    const data = await loadServiceSeoBlock(link);
    if (!data) {
        return (
            <>
                <OldServiceSeoBlock dops={dops ? dops : []} ways={ways ? ways : []} />
            </>
        )
    }
    let items = [];
    for (let i = 0; i < data.headers.length; i++) {
        items.push({
            id: i + 1,
            header: data.headers[i],
            text: data.descriptions[i],
        });
    }
    return (
        <>
            <div className={styles.block}>
                <SeoItem header={items[0].header} text={items[0].text} id={0} />
                <WhyUsElem />
                {
                    items.slice(1).map(item => (
                        <SeoItem header={item.header} text={item.text} key={item.id} />
                    ))
                }
                <br />
                <div style={{ display: 'flex', width: '100%', alignSelf: 'center', flexDirection: 'column', alignItems: 'center' }}>
                </div>
            </div>
            <ConsultButton align={'center'} style={{ alignSelf: 'center', marginBottom: '20svh', scale: 0.9 }} />
        </>
    )
}

export default ServiceSeoBlock;