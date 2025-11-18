'use server'

import axios from "axios";
import '../../../envConfig';


export const loadRequestsByVacancie = async (link,token) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/vac-requests/${link}`,{token},{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        console.log(err.response?err.response.data:err.message)
        throw new Error(err.response?err.response.data:'Произошла тех. ошибка')
    }
}