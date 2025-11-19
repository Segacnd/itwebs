'use server'
import * as styles from '../adminComponent.module.css';
import axios from 'axios';

import RequestItem from './OpenRequestItem';




const OpenRequest = async (props) => {
    const requests = props.arr;
    return (
        <>
            <RequestItem updated={'Создано'} id='ID' name='Имя' email='Почта' phone='Телефон' service='Услуга' />
            <div className={styles.requestList}>
                {requests.map(item => (
                    <RequestItem key={item.id} asnwer='Ответить' updated={item.updatedAt} name={item.name} email={item.email} phone={item.phone} service={item.service} id={item.id} comment={item.comment} />
                ))}
            </div>
        </>

    )
}

export default OpenRequest;