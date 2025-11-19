'use server'
import * as styles from './hr.module.css';
import axios from 'axios';
import Link from 'next/link';

const HrPanel = async () => {
    let vacancies = [];

    try {
        const { data } = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/vacancies`, {
            timeout: 5000,
            headers: {
                'Cache-Control': 'no-cache, no-store'
            }
        });
        vacancies = data.map(item => ({ name: item.name, link: item.link }));
    } catch (err) {
        console.log(err?.message);
    }


    return (
        <div className={styles.hrpanel}>
            <h1>Выберите пожалуйста вакансию, по которой хотите увидеть заявки</h1>
            <div className={styles.hrMenuComponent}>
                {vacancies.map(item => (
                    <Link href={`/admin/hr/${item.link}`} className={styles.hrMenuItem}>
                        <h2>{item.name}</h2>
                    </Link>
                ))}
                <Link href={`/admin/hr/all`} className={styles.hrMenuItem}>
                    <h2>Все</h2>
                </Link>
            </div>
        </div>
    )
}

export default HrPanel;