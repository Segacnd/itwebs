
import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './servicesList.module.css';
import Link from 'next/link';

const ServicesList = ({ list, route }) => {
    return (
        <div className={styles.listContainer}>
            {list.map((item, ind) => (
                <div key={item.name + ind} className={styles.listItem}>
                    <div className={styles.itemInfoContent}>
                        <h2 className={styles.itemInfoName}>
                            {item.name}
                        </h2>
                        <div className={styles.itemText}>
                            <div className={styles.itemDesc}>
                                <div>
                                    <div className={styles.descCircle}></div>
                                </div>
                                <div>
                                    {item.listDesc || 'Подходит для всех типов бизнесов'}
                                </div>
                            </div>
                            <div className={styles.itemDesc}>
                                <div>
                                    <div className={styles.descCircle}></div>
                                </div>
                                <div>
                                    <span>
                                        {item.done ? <>Приобретено <b>{item.done || 100}</b></> : <>Сроки выполнения зависят от бюджета заказчика</>}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.itemDesc}>
                                <div>
                                    <div className={styles.descCircle}></div>
                                </div>
                                <span>
                                    {item.minPrice ? <>Цена от <b>{item.minPrice || 1000} руб. </b> </> : <> Стоимость является договорной</>}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemIconContent}>
                        <Icon icon={item.listIcon || 'maki:rocket'} className={styles.itemIcon} />
                    </div>
                    <div className={styles.itemButtonContent}>
                        <Link href={route + item.link} style={{ textDecoration: 'none', color: 'white' }}>
                            <Icon icon={'cil:arrow-right'} className={styles.goIcon} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesList;