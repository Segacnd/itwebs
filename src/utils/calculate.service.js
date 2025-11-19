'use server'

import axios from 'axios';
import '../../envConfig';

export const calculateQuiz = async (cur) => {
    try{
        let obj = {...cur};
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/calculate-quiz`,{data:obj},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        })
        const {data} = response;
        return data;
    }catch(err){
        console.log(err.response?err.response.data:err?.message);
        throw new Error('Произошла ошибка во время вычислений');
    }
}