'use client'

import { useRef, useState } from "react";
import * as styles from './detail.module.css';
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { sendVacant } from "@/services/sendVacant.service";

const DetailRequest = ({ name }) => {

    const defaultState = {
        name: '',
        surname: '',
        country: '',
        phone: '',
        email: '',
        telegram: '',
        comment: '',
        file: null,
        vacancieName: name,
    }
    const [inputObj, setInputObj] = useState({
        ...defaultState
    })
    const errors = {
        name: 'Имя пользователя должно быть заполнено обязательно',
        email: 'Пожалуйста укажите корректный email',
        telegram: 'Никнейм в телеграм не указан!',
        phone: 'Обязательно укажите ваш номер телефона'
    }

    const [openModal, setOpenModal] = useState(false);
    const modalComponent = useRef();

    const opModal = () => {
        setOpenModal(true);
        setTimeout(() => {
            modalComponent.current.style.opacity = 1;
        }, 0)
    }

    const hideModal = () => {
        modalComponent.current.style.opacity = 0
        setTimeout(() => {
            setOpenModal(false);
        }, 1000)
    }

    const handleSubmit = (e) => {
        const formData = new FormData;
        e.preventDefault();
        const needed = 'name email phone telegram'.split(' ');
        for (let item of needed) {
            if (!inputObj[item])
                return toast.error(errors[item]);
        }
        for (let key in inputObj) {
            formData.append(key, inputObj[key]);
        }
        if (!/^[a-z.0-9_]+\@[a-z0-9]+\.[a-z]+$/i.test(inputObj.email))
            return toast.error('Пожалуйста введите корректную почту либо свяжитесь с нами через соц. сети')
        sendVacant(formData).then(res => {
            toast.success('Ваш отклик был успешно отправлен');
            hideModal();
        }).catch(err => toast.error(err?.message));
    }
    return (
        <>
            {openModal &&
                <div className={styles.modalComponent} onClick={hideModal}>
                    <form ref={modalComponent} onSubmit={handleSubmit} className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeading}>
                            <h2>Резюме</h2>
                            <Icon className={styles.modalCloseIcon} onClick={hideModal} icon={'line-md:close'} />
                        </div>
                        <div className={styles.modalInputs}>
                            <div className={styles.modalNameLine}>
                                <input value={inputObj.name} onChange={(e) => setInputObj(prev => ({ ...prev, name: e.target.value }))} type="text" placeholder="Имя" />
                                <input value={inputObj.surname} onChange={(e) => setInputObj(prev => ({ ...prev, surname: e.target.value }))} type="text" placeholder="Фамилия" />
                            </div>
                            <div className={styles.modalNameLine}>
                                <input value={inputObj.country} onChange={(e) => setInputObj(prev => ({ ...prev, country: e.target.value }))} type="text" placeholder="Страна" />
                                <input value={inputObj.phone} onChange={(e) => setInputObj(prev => ({ ...prev, phone: '+' + e.target.value.split('').filter(item => /[0-9]/.test(item)).join('') }))} type="text" placeholder="Номер телефона" />
                            </div>
                            <input value={inputObj.email} onChange={(e) => setInputObj(prev => ({ ...prev, email: e.target.value }))} type="text" className={styles.modalLineInput} placeholder="Почтовый адрес" />
                            <input value={inputObj.telegram} onChange={(e) => setInputObj(prev => ({ ...prev, telegram: '@' + e.target.value.split('').filter(item => item != '@').join('') }))} type="text" className={styles.modalLineInput} placeholder="Имя пользователя в телеграм" />
                            <div className={styles.modalFileContainer} >
                                {
                                    inputObj.file ?
                                        <div className={styles.modalFileImage} title='Удалить' onClick={() => setInputObj(prev => ({ ...prev, file: null }))}>
                                            Вы прикрепили файл {inputObj.file.name}
                                        </div>
                                        :
                                        <>
                                            <div className={styles.modalFileImage}>
                                                <Icon className={styles.modalFileIcon} icon={'material-symbols-light:docs-outline-rounded'} />
                                                <p>Прикрепите сюда ваши файлы</p>
                                            </div>
                                            <input type={'file'} className={styles.formFile} onChange={(e) => setInputObj((prev) => ({ ...prev, file: e.target.files[0] }))} />
                                        </>
                                }
                            </div>
                            <textarea value={inputObj.comment} onChange={(e) => setInputObj(prev => ({ ...prev, comment: e.target.value }))} rows={3} className={styles.modalTextarea} placeholder="Комментарий" />
                            <button type="submit" className={styles.modalConfirmButton}>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            }
            <button onClick={opModal} className={styles.requestButton}>Откликнуться</button>
        </>
    )
}

export default DetailRequest;