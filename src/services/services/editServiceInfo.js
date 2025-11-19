'use server'
import axios from 'axios';
import '../../../envConfig';


export const editServiceInfo = async (obj) => {
    try{
        if(!obj.id||!obj.token||obj.length<3)
            throw new Error('Указаны не все элементы для изменения');
        const response = await axios.put(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/edit-service-item/${obj.id}`,{...obj},{
            timeout:5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        });
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err.response?err.response?.data:err?.message);
    }
}