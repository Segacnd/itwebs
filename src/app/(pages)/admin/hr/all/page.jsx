'use server';

import HrListBlock from '@/components/admin/vacancies/hr/HrListBlock';
import * as styles from '../../../../../components/admin/adminComponent.module.css';
import RootHeading from '@/components/admin/RootHeading';
import BrokenTest from '@/app/(pages)/brokentest/page';
import axios from 'axios';


const HRPage = async () => {
    return(
        <div className={styles.page}>
            <RootHeading />
            <HrListBlock vacancieLink={'all-vacancies-list'} />
        </div>
    )
}

export default HRPage;