import * as adminStyles from '../../../../components/admin/adminComponent.module.css';
import *  as styles from '../../../../styles/servicesAdmin.module.css';
import RootHeading from '../../../../components/admin/RootHeading';
import ServicesAdminList from '../../../../components/services/admin/ServicesList';

const ServicesAdminPage = () => {
    return (
        <div className={adminStyles.page}>
            <RootHeading />
            <ServicesAdminList />
        </div>
    )
}

export default ServicesAdminPage;