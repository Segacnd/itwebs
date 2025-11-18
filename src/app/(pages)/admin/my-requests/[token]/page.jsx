`use server`
import axios from 'axios';
import '../../../../../../envConfig';
import AdminHeading from '../../../../../components/admin/AdminHeading';
import * as styles from '../../../../../components/admin/adminComponent.module.css';
import RequestItem from '../../../../../components/admin/requests/OpenRequestItem';
import Broken from '../../../../../components/global/Broken';
import AdminNewRequestItem from '@/components/admin/requests/AdminNewRequestItem';

export const getMyRequests = async (token) => {
    try {
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/load-my`,{token});
        const {data} = response;
        return data;
    } catch (err) {
        return null;
    }
}

export const generateMetadata = async ({ params }) => {
    let pars = await params;
    return {
        title: 'My requests',
        description: `Requests of moderator ${pars.token}`
    }
}

const MyRequests = async ({params}) => {
    const pars = await params;
    const requests = await getMyRequests(pars.token);
    if(requests===null){
        return(
            <>
                <Broken/>
            </>
        )
    }
    return (
        <div className={styles.page}>
            <AdminHeading />
            <div className={styles.blockHeading}>
                Ниже представлен список активных заявок, которые закреплены за вами
            </div>
            <div className={styles.newRequestList}>
                {
                    requests.map(item=>(
                        <AdminNewRequestItem item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default MyRequests;