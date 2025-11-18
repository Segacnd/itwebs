import RootHeading from '@/components/admin/RootHeading';
import * as styles from '../../../../components/admin/adminComponent.module.css';
import HrPanel from '@/components/admin/vacancies/hr/HrPanel';


const HRPage = () => {
    return(
        <div className={styles.page}>
            <RootHeading />
            <HrPanel />
        </div>
    )
}

export default HRPage;