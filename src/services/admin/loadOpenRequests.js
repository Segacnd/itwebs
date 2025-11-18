'use server'
import axios from "axios";
import '../../../envConfig';



export const loadOpenRequests = async (token) => {
    try {
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/get-open-requests`, {
            params: { _limit: 3 },
            timeout: 5000,
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        const { data } = response;
        return data;
    } catch (err) {
        return null;
    }
}