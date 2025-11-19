'use client'
import React from "react";
import { useAppSelector, useAppStore } from "../../../store/hooks";
import LoginComponent from "../../../components/admin/LoginComponent";
import PanelComponent from "../../../components/admin/PanelComponent";

const AdminPanel = () => {
    const store = useAppStore();
    const {auth} = useAppSelector(state=>state.mainReducer.user);
    if(!auth)
        return <LoginComponent/>
    return (
        <PanelComponent/>
    )
}

export default AdminPanel;