'use server'

import axios from "axios";
import '../../envConfig';

export const sendVacant = async (formdata) => {
    try{
        const request = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/vacancies`,formdata,{
            timeout: 5000,
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        const {data} = request;
        return data;
    }catch(err){
        console.log(err);
        throw new Error(err.response? err?.response?.data:err?.message);
    }
}