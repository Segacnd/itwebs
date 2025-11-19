'use client'
import { Icon } from '@iconify/react/dist/iconify.js';
import * as globalStyles from '../../styles/app.module.css';

const ModalHeading = ({color='', width='', mt='', mb='', setOpen=()=>(null), text='', closeVal=false}) => {
    return (
        <div className={globalStyles.modalHeading} style={{width, marginBottom:mb}}>
            <h2 style={{color,marginTop:mt}}>{text}</h2>
            <Icon style={{position:'relative',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignSelf:'flex-start', cursor:'pointer'}} onClick={()=>setOpen(closeVal)} icon="line-md:close" width="2vw" height="2vw" color='black'/>
        </div>
    )
}

export default ModalHeading;