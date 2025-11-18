
import { useState } from 'react';
import * as styles from './detailRequest.module.css';

const DetailRequest = ({request,setOpen}) => {
    const {inputObj,setInputObj} = useState({...request});
    return(
        <div className={styles.component} onClick={()=>setOpen(false)}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Заявка №{request.id}</h2>
                <div className={styles.infoPair}>
                    <label>Тема заявки</label>
                    <h3>{request.theme}</h3>
                </div>
                <div className={styles.infoPair}>
                    <label>Имя заказчика</label>
                    <h3>{request.name}</h3>
                </div>
                <div className={styles.infoPair}>
                    <label>Номер телефона</label>
                    <h3>{request.phone}</h3>
                </div>
            </div>
        </div>
    )
}

export default DetailRequest;