'use server'
import axios from 'axios';
import '../../envConfig';

export const loadWorths = async () => {
    try{
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/worths`,{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache'
            }
        })
        const {data} = response;
        if(data.length<1)
            return null;
        return data
    }catch(err){
        console.log(err);
        return null;
    }
}