'use server'

import axios from 'axios';
import '../../envConfig';

export const sendCalculateRequest = async (obj) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/request/calculate`,{...obj},{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        console.log(err?.message);
        throw new Error('Упс.. произошла ошибка на сервер!');
    }
}