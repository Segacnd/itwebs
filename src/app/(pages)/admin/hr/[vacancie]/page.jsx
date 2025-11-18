'use server';

import HrListBlock from '@/components/admin/vacancies/hr/HrListBlock';
import * as styles from '../../../../../components/admin/adminComponent.module.css';
import RootHeading from '@/components/admin/RootHeading';
import BrokenTest from '@/app/(pages)/brokentest/page';
import axios from 'axios';


const HRPage = async ({params}) => {
    const pars = await params;
    if(!pars){
        return(
            <BrokenTest />
        )
    }
    const {vacancie} = pars;
    return(
        <div className={styles.page}>
            <RootHeading />
            <HrListBlock vacancieLink={vacancie} />
        </div>
    )
}

export default HRPage;