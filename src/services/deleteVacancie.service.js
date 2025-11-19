'use server'

import axios from 'axios';
import '../../envConfig';

export const deleteVacancie = async (link,token) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/del-vacancie`,{link,token},{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err?.message);
    }
} 