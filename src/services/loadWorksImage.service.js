"use server"

import axios from "axios";
import '../../envConfig';

export const loadWorksImage = async (image) => {
    try{
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/home-works/${image}`,{
            timeout: 5000,
            headers:{
                "Cache-Control":"no-cache, no-store"
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        console.log(err.response?err.response.data:err?.message);
        return null
    }
}