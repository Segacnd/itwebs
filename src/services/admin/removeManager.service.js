'use server'
import axios from "axios";
import '../../../envConfig'


export const removeManager = async (token, id) => {
    try{
        const response = await axios.post(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/remove-manager`,{token,id});
        const {data} = response;
        return data;
    }catch(err){
        throw new Error(err.response?err?.response?.data?.message:err?.message);
    }
}