"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { tokenAuth } from "../../services/admin/tokenAuth.service";
export default function FooterAuthClient() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token)
      try {
        tokenAuth(token)
          .then((res) => {
            dispatch({ type: "LOGIN", payload: { ...res } });
            toast.success("You are welcome");
          })
          .catch((err) => {
            if (err.message == "server") localStorage.removeItem("token");
          });
      } catch (err) {}
  }, []);
  return null;
}
