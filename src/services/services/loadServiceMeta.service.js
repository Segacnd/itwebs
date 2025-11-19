'use server'
import axios from 'axios';
import '../../../envConfig';


export const loadServiceMeta = async (name) => {
    try{
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/service-meta/${name}`,{
            timeout:5000,
            headers:{
                "Cache-Control":'no-cache'
            }
        })
        const {data} = response;
        const {title,description,image} = data;
        return {title,description,image};
    }catch(err){
        console.log(err.response?err.response.data?.message:err?.message);
        return null;
    }
}