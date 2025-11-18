'use server'
import * as styles from './../../../../components/admin/adminComponent.module.css';
import OpenRequest from '../../../../components/admin/requests/OpenRequestsComponent';
import axios from 'axios';
import AdminHeading from '../../../../components/admin/AdminHeading'
import Broken from '../../../../components/global/Broken';


export const getRequests = async () => {
    try {
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/get-open-requests`, {
            params: { _limit: 3},
            timeout: 5000,
            headers: {
                "Cache-Control": "no-cache"
            }
        })
        const { data } = response;
        console.log(data);
        return data;
    } catch (err) {
        return null
    }
}

export async function generateMetadata() {
    return {
        title: 'Открытые заявки на модерацию',
        description: 'Страница администратора для обработки заявок от клиентов'
    }
}

const OpenRequests = async () => {
    const requests = await getRequests();
    const sortFunc = (a,b)=>{
        let first = a.updatedAt.split('T')[0].split('-');
        let second = a.updatedAt.split('T')[0].split('-');
        let [fYear,fMonth,fDay] = [first[0],first[1],first[2]];
        let [sYear,sMonth,sDay] = [second[0],second[1],second[2]];
        if(first.join('')===second.join(''))
            return 0
        else{
            if(fYear!=sYear)
                return Number(fYear)-Number(sYear)
            if(fMonth!=sMonth)
                return Number(fMonth)-Number(sMonth)
            if(fDay!=fMonth)
                return Number(fDay)-Number(sDay);
        }
    }
    if(!requests){
        return(
            <>
                <Broken/>
            </>
        )
    }
        return (
        <div className={styles.page}>
            <AdminHeading/>
            <OpenRequest arr={requests.sort(sortFunc).reverse()}/>
            {/*
                requests.map(item=>(
                    <div>{item.name}</div>
                ))
            */}
        </div>
    )
}

export default OpenRequests;


// export async function getServerSideProps (){
//     try{
//         const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/get-open-requests`,{
//             headers:{
//                 "Content-Type":"no-cache,no-store"
//             }
//         })
//         const {data} = response;
//         return {
//             props:{
//                 requests:data
//             }
//         }
//     }catch(err){
//         return {
//             props: {
//                 requests:[]
//             }
//         }
//     }
// }