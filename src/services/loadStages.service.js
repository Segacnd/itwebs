"use server";
import axios from "axios";
import "../../envConfig";

export const loadStages = async () => {
  try {
    const response = await axios.get(
      `${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/stages`,
      {
        timeout: 5000,
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    const { data } = response;
    if (data.length < 1) return null;
    return data.slice(0, 8);
  } catch (err) {
    console.log(err.response ? err.response.data : err?.message);
    return null;
  }
};
