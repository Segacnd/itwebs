'use server';
import * as styles from '../../../../../components/admin/adminComponent.module.css';
import '../../../../../../envConfig';
import RootHeading from '../../../../../components/admin/RootHeading';
import { getAllModeratorsToEdit } from '../../../../../services/admin/getModeratorsListToEdit.service';
import ModeratorsItem from '../../../../../components/admin/ModeratorsItem';
import Broken from '../../../../../components/global/Broken';

export const generateMetadata = async () => {
    return {
        title:'Модераторы | Admin Page',
        description: 'Страница содержащая список модераторов для администрирования'
    }
}

const AdminModeratorsPage = async ({params}) => {
    const pars = await params;
    const {token} = pars
    const moderators = await getAllModeratorsToEdit(token);
    const sortByDate = (arr,str) => {

    }
    if(moderators===null){
        return(
            <>
                <Broken/>
            </>
        )
    }
    return(
        <div className={styles.page}>
            <RootHeading />
            <div className={styles.requestList}>
                {moderators.map(item=>(
                    <ModeratorsItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default AdminModeratorsPage;