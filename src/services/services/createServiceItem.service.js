'use server'
import axios from 'axios';
import '../../../envConfig';

export const createServiceItem = async ({token,name,title,description,ways,dops,seoText,homeName, homeImage}) => {
    try{
        const newObj = {
            name,
            title,
            description,
            homeName,
            homeImage,
            ways:ways.split(','),
            dops:dops.split(','),
            seoText,
            techIcons:[],
            token
        };
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/create-service-item`,{...newObj},{
            timeout: 5000,
            headers: {
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err.response?err.response?.data:err?.message);
    }
}