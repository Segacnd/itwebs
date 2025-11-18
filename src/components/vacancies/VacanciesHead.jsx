'use server'

import PageHeading from '../global/PageHeading';
import * as globalStyles from '../../styles/app.module.css';
import * as styles from './vacancies.module.css'
import VacancieItem from './VacancieItem';
import '../../../envConfig'
import axios from 'axios';
import VacancieClear from './VacancieCliear.jsx';

const VacanciesHead = async () => {
    class Vacancie {
        constructor(name, desc, link, image) {
            this.name = name;
            this.desc = desc;
            this.link = link;
            this.image = image;
        }
    }
    let vacancies = [
        new Vacancie('Frontend-разработчик', 'Ищем разработчика, который создает интерфейсы от которых пользователи не могут оторвать глаз', 'frontend', 'dcf540ff53000c43464f05bb7e84aa6bc436f7bf.png'),
        new Vacancie('Fullstack-разработчик', 'Ищем разработчика для которого по плечу и серверные и визуальные задачи', 'fullstack', 'ffa686c6f87e58e10ec77f3f1731fac195fc9059.png'),

        new Vacancie('Frontend-разработчик', 'Ищем разработчика, который создает интерфейсы от которых пользователи не могут оторвать глаз', 'frontend', 'dcf540ff53000c43464f05bb7e84aa6bc436f7bf.png'),
        new Vacancie('Fullstack-разработчик', 'Ищем разработчика для которого по плечу и серверные и визуальные задачи', 'fullstack', 'ffa686c6f87e58e10ec77f3f1731fac195fc9059.png')
    ];

    let data = null;

    try {
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/vacancies`, {
            timeout: 5000,
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        data = response && response.data.length ? response.data : data;
    } catch (err) {
        console.log(err.message);
    }

    return (
        <div className={globalStyles.block} style={{ paddingTop: 0 }}>
            <PageHeading style={{ paddingLeft: '7vw' }} title={'Вакансии'} />
            {
                data ?
                    <>
                        <h1 className={styles.headText}>
                            Мы открыты к найму новых специалистов в ряды нашей компании, которые готовы также как мы гореть идеей создать наилучший продукт
                        </h1>
                        <div className={styles.list}>
                            {data.map((item, ind) => (
                                <VacancieItem key={ind + item.name} title={item.name} image={`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/vacancies/` + item.image} link={item.link} desc={item.desc} />
                            ))}
                        </div>
                    </>
                    :
                    <VacancieClear />
                
            }

        </div>
    )
}

export default VacanciesHead;