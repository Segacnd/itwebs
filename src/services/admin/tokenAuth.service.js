'use server'
import axios from "axios";
import '../../../envConfig';

export const tokenAuth = async (token) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/auth`,{token},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        })
        const {data} = response;
        return data;
    }catch(err){
        if(err.response)
            throw new Error('server');
        throw new Error(err.respone?err.respone.data?.message:err?.message);
    }
}