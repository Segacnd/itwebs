'use server'
import axios from "axios"
import '../../envConfig.js';

export const sendConsultRequest = async (obj) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/request`,{...obj},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err.response?err.response.data?.message:err?.message);
    }
}