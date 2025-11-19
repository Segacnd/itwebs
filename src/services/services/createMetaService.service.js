'use server'

import axios from 'axios';
import '../../../envConfig';


export const createMetaService = async ({token,name,title,description,image}) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/create-meta-service`,{token,name,title,description,image},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err?.message);
    }
}