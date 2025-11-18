'use server'

import axios from 'axios';
import '../../../envConfig';

export const loadServiceSeoBlock = async (link) => {
    try{
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/service-seo/${link}`,{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store'
            }
        });
        const {data} = response;
        return data;
    }
    catch(err){
        console.log(err.response?err.response.data:err?.message);
        return null;
    }
}