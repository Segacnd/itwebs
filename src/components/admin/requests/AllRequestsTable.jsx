'use client'
import { useEffect, useMemo, useState } from 'react'
import * as styles from '../adminComponent.module.css'
import * as globalStyles from '../../../styles/app.module.css';
import { sortRequests } from '../../../utils/sortRequests.service';
import AdminRequestItem from './AdminRequestItem';

const AllRequestsTable = (props) => {
    const [filterInput,setFilterInput] = useState('');
    const [list,setList] = useState([]);
    useEffect(()=>{
        props.list&&setList([...props.list].map(item=>({...item,manager:item.manager?item.manager:''})));
    },[,props.list]);
    let sortedList = useMemo(()=>{
        if(filterInput==='')
            return list.sort(sortRequests);
        return list.filter(item=>item.manager.includes(filterInput)).sort(sortRequests)
    },[list,filterInput])
    return (
        <div className={globalStyles.block}>
            <input type='text' value={filterInput} placeholder='Filter by manager' className={styles.allRequestsFilter} onChange={(e)=>setFilterInput(e.target.value)}/>
            <div className={styles.requestList}>
                {sortedList.map(item => (
                    <AdminRequestItem key={item.id} name={item.name} email={item.email} phone={item.phone} comment={item.comment}
                        manager={item.manager} answered={item.answered} id={item.id} updated={item.updatedAt} service={item.service} />
                ))}
            </div>
        </div>
    )
}

export default AllRequestsTable;