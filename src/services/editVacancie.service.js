'use server'

import axios from 'axios';
import '../../envConfig';

export const editVacancie = async (obj) => {
    try{
        const response = await axios.put(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/vacancie`,{...obj},{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store'
            }
        })
        const {data} = response;
        return data;
    }catch(err){
        console.log(err.response?err.response.data:err?.message);
        throw new Error('Произошла ошибка!')
    }
}