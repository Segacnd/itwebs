'use server'
import axios from 'axios'
import '../../../envConfig'

export const sendLoginData = async (obj) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/login`,{...obj},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        if(err?.code=='ECONNREFUSED')
            throw new Error('Сервер временно не работает')
        throw new Error(err.response?err.response?.data:err?.message);
    }
}