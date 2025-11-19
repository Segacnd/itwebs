'use server'

import RootHeading from "../../../../../components/admin/RootHeading";
import { loadAllRequests } from "../../../../../services/admin/loadAllRequests";
import Custom404 from '../../../../not-found';
import * as styles from '../../../../../components/admin/adminComponent.module.css';
import AdminRequestItem from "../../../../../components/admin/requests/AdminRequestItem";
import Broken from "../../../../../components/global/Broken";
import AllRequestsTable from '../../../../../components/admin/requests/AllRequestsTable';

const AllRequestsPage = async ({ params }) => {
    const token = await params.token;
    const requests = await loadAllRequests(token);
    
    if (!requests) {
        return (
            <Broken/>
        )
    }
    return (
        <div className={styles.page}>
            <RootHeading />
            <AllRequestsTable list={requests} />
        </div>
    )
}

export default AllRequestsPage;