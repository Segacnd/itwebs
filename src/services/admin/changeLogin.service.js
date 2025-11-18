'use server'
import axios from "axios"
import '../../../envConfig'


export const changeLogin = async ({token,password,login}) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/change-login`,{token,password,login},{
            timeout: 5000,
            headers: {
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err.response?err.response?.data?.message:err?.message);    
    }
}