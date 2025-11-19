'use server'
import axios from 'axios';
import '../../../envConfig';


export const regModerator = async ({token,username,email,password}) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/create-moderator`,{email,username,token,password});
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err.response?err?.response?.data:err?.message);
    }
}