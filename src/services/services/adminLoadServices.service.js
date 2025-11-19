'use server'

import axios from "axios";
import '../../../envConfig';

export const adminLoadServices = async (token) => {
    try{
        const response = await axios.put(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/get-services`,{token},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err.response?err.response?.data:err?.message);
    }
}