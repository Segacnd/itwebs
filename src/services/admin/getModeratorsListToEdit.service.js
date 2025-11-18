'use server'
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../../envConfig';

export const getAllModeratorsToEdit = async (token) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/moderators`,{token},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache',
            }
        })
        const {data} = response;
        return Array.isArray(data)?[...data]:[data];
    }catch(err){
        console.log(err.response?err.response.data:err?.message);
        return null;
    }
}