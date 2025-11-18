'use server'

import axios from "axios";
import '../../envConfig';

export const deleteVacRequest = async (ind,token) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/delete-vac-request/${ind}`,{token},{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store'
            }
        })
        const {data} = response;
        return data;
    }catch(err){
        console.log(err.response?err.response.data:err?.message);
        throw new Error(err.response?err.response.data:'Прозоизошла ошибка в системе');
    }
}