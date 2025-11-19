import RootHeading from '@/components/admin/RootHeading';
import * as styles from '../../../../components/admin/adminComponent.module.css';
import CreateVacancie from '@/components/admin/vacancies/CreateVacancie';
import AVacanciesList from '@/components/admin/vacancies/AVacanciesList';


const AdminVacancie = () => {
    return(
        <div className={styles.page}>
            <RootHeading/>
            <CreateVacancie />
            <AVacanciesList />
        </div>
    )
}

export default AdminVacancie;