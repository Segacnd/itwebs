'use client'

import { useEffect, useRef, useState } from 'react';
import * as styles from './adminVacancies.module.css';
import ModalHeading from '@/components/global/ModalHeading';
import { Icon } from '@iconify/react/dist/iconify.js';
import { toast } from 'react-toastify';
import { createVacancie } from '@/services/admin/createVacancie.service';


const CreateVacancie = () => {

    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef();

    const defaultState = {
        name: '',
        desc: '',
        link: '',
        title: '',
        description: '',
        sallary: '',
        file: null,
    }

    const [conditions, setConditions] = useState(['']);
    const [requirments, setRequirments] = useState(['']);
    const [responsibilities, setResponsibilities] = useState(['']);
    let token;

    let formData = new FormData();

    const [inputObj, setInputObj] = useState({ ...defaultState });
    const handleClose = () => {
        modalRef.current.style.opacity = 0;
        modalRef.current.style.scale = 0;
        setTimeout(() => {
            setOpenModal(false);
        }, 1000);
    }

    const handleOpen = () => {
        setOpenModal(true);
        setTimeout(() => {
            modalRef.current.style.opacity = 1;
            modalRef.current.style.scale = 1;
        }, 0)
    }


    const tryToCreate = (e) => {
        formData = new FormData();
        e.preventDefault();
        for(let key in inputObj){
            if(!inputObj[key])
                return toast.error('Все поля в форме должны быть обязательно заполнены');
        }
        for(let key in inputObj){
            formData.append(key,inputObj[key]);
        }
        formData.append('conditions',conditions.join(',;'));
        formData.append('responsibilities',responsibilities.join(',;'));
        formData.append('requirments',requirments.join(',;'));
        formData.append('token', localStorage.getItem('token'));
        createVacancie(formData).then(res=>{
            toast.success("Вы успешно создали новую вакансию");
            handleClose();
            setTimeout(()=>{
                window.location.reload();
            },1100)
        }).catch(err=>toast.error(err?.message));
    }
    return (
        <>
            {openModal &&
                <div className={styles.modalComponent} onClick={handleClose}>
                    <form onSubmit={tryToCreate} ref={modalRef} className={styles.createModalContainer} onClick={(e) => e.stopPropagation()}>
                        <ModalHeading setOpen={handleClose} color='black' text='Окно создания новой вакансии' />
                        <div className={styles.createModalInputs}>
                            <div className={styles.createModalInputPair}>
                                <label>Название вакансии</label>
                                <input type='text' value={inputObj.name} onChange={(e) => setInputObj(prev => ({ ...prev, name: e.target.value }))} />
                            </div>
                            <div className={styles.createModalInputPair}>
                                <label>Краткое описание вакансии</label>
                                <input type='text' value={inputObj.desc} onChange={(e) => setInputObj(prev => ({ ...prev, desc: e.target.value }))} />
                            </div>
                            <div className={styles.createModalInputPair}>
                                <label>Рабочая ссылка на вакансию англ.</label>
                                <input type='text' placeholder='example (без слешей и прочего)' value={inputObj.link} onChange={(e) => setInputObj(prev => ({ ...prev, link: e.target.value }))} />
                            </div>
                            <div className={styles.createModalInputPair}>
                                <label>Ориентировочная зарплата в месяц (text) </label>
                                <input type='text' placeholder='5000 BYN за 180 часов / 1000$ в мес.' value={inputObj.sallary} onChange={(e) => setInputObj(prev => ({ ...prev, sallary: e.target.value }))} />
                            </div>
                            <div className={styles.createModalInputPair}>
                                <label>SEO title</label>
                                <input type='text' placeholder='title < 60 symb.' value={inputObj.title} onChange={(e) => setInputObj(prev => ({ ...prev, title: e.target.value }))} />
                            </div>
                            <div className={styles.createModalInputPair}>
                                <label>SEO description</label>
                                <textarea placeholder='title < 150 symb.' value={inputObj.description} onChange={(e) => setInputObj(prev => ({ ...prev, description: e.target.value }))} />
                            </div>
                            <div className={styles.createModalInputList}>
                                <label>Укажите условия вакансии</label>
                                <div className={styles.createModalLists}>
                                    {conditions.map((item, ind) => (
                                        <div className={styles.createModalListItem}>
                                            <input type='text' value={item} onChange={(e) => setConditions(prev => (prev.map((curItem, curInd) => curInd == ind ? e.target.value : curItem)))} />
                                            <Icon onClick={() => setConditions(prev => (prev.filter((el, end) => end != ind)))} className={styles.createModalListItemIcon} icon='ic:outline-delete' />
                                        </div>
                                    ))}
                                </div>
                                <button className={styles.createModalAddList} onClick={() => setConditions(prev => ([...prev, '']))} type={'button'}>
                                    Добавить элемент
                                </button>
                            </div>
                            <div className={styles.createModalInputList}>
                                <label>Укажите требования вакансии</label>
                                <div className={styles.createModalLists}>
                                    {requirments.map((item, ind) => (
                                        <div className={styles.createModalListItem}>
                                            <input type='text' value={item} onChange={(e) => setRequirments(prev => (prev.map((curItem, curInd) => curInd == ind ? e.target.value : curItem)))} />
                                            <Icon onClick={() => setRequirments(prev => (prev.filter((el, end) => end != ind)))} className={styles.createModalListItemIcon} icon='ic:outline-delete' />
                                        </div>
                                    ))}
                                </div>
                                <button className={styles.createModalAddList} onClick={() => setRequirments(prev => ([...prev, '']))} type={'button'}>
                                    Добавить элемент
                                </button>
                            </div>
                            <div className={styles.createModalInputList}>
                                <label>Укажите должностные обязанности</label>
                                <div className={styles.createModalLists}>
                                    {responsibilities.map((item, ind) => (
                                        <div className={styles.createModalListItem}>
                                            <input type='text' value={item} onChange={(e) => setResponsibilities(prev => (prev.map((curItem, curInd) => curInd == ind ? e.target.value : curItem)))} />
                                            <Icon onClick={() => setResponsibilities(prev => (prev.filter((el, end) => end != ind)))} className={styles.createModalListItemIcon} icon='ic:outline-delete' />
                                        </div>
                                    ))}
                                </div>
                                <button className={styles.createModalAddList} onClick={() => setResponsibilities(prev => ([...prev, '']))} type={'button'}>
                                    Добавить элемент
                                </button>
                            </div>
                            <div className={styles.createModalFile}>
                                <div className={styles.createModalFileHead}>Прикрепите ваш файл</div>
                                {
                                    inputObj.file ?
                                        <div className={styles.createModalFileContent} onClick={() => setInputObj(prev => ({ ...prev, file: null }))}>
                                            <Icon className={styles.createModalFileIcon} color={'rgba(255,0,0,1)'} icon={'ic:outline-delete'} />
                                            Удалить файл
                                        </div>
                                        :
                                        <>
                                            <div className={styles.createModalFileContent}>
                                                <div>
                                                    <Icon className={styles.createModalFileIcon} icon={'line-md:file-twotone'} />
                                                    <span>Выберите файл</span>
                                                </div>

                                                <input type='file' value={inputObj.file} onChange={(e) => setInputObj(prev => ({ ...prev, file: e.target.files[0] }))} />
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                        <div className={styles.modalCreateButtons}>
                            <button type='submit'>
                                Создать вакансию
                            </button>
                        </div>
                    </form>
                </div>
            }
            <div className={styles.createLine}>
                <button onClick={handleOpen} className={styles.createButton}>
                    Создать вакансию
                </button>
            </div>
        </>
    )
}

export default CreateVacancie;