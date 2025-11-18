'use client'

import { useEffect, useState } from 'react';
import styles from './consultButton.module.css';
import ConsultModal from '../global/ConsultModal';
import * as motion from 'motion/react-client'

const ConsultButton = (props) => {
    const [modalConsult, setModalConsult] = useState(false);
    const [wind, setWind] = useState(null)
    useEffect(() => {
        setWind(window);
    }, [])
    return (
        <>
            {modalConsult === true && <ConsultModal setOpen={setModalConsult} />}
            <motion.div
                initial={{ transform: 'scale(0)' }}
                whileInView={{ transform: 'scale(1)' }}
                transition={{ duration: 1 }}
                viewport={{ amount: 'some' }}
                style={{ position: 'initital' ,width:'fit-content', alignSelf:props.align?props.align:''}} >
                <button onClick={() => setModalConsult(true)} style={{ transform: wind && wind.innerWidth <= 900 ? 'translateX(-6vw)' : '', textAlign: 'center', ...props.styles }} className={styles.consultButton}>Заказать консультацию</button>
            </motion.div>
        </>
    )
}

export default ConsultButton;