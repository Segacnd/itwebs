'use server'

import axios from 'axios';
import '../../../envConfig';

export const createVacancie = async (form) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/vacancie`,form,{
            headers:{
                'Content-Type':'multipart/form-data',
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        return (err.response?err.response.data:err?.message);
        
    }
}