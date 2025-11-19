import { flightRouterStateSchema } from "next/dist/server/app-render/types"


const defaultState = {
    auth: false,
    username: null,
    email: null,
    permissions: 'user',
    token: null
}

export const userReducer = (state={...defaultState}, {type,payload}) => {
    switch(type){
        case "LOGIN":
            return {...state,token: payload.token, auth: true, username: payload.username, email: payload.email, permissions: payload.admin?'admin':'moderator'}
        case "LOGOUT":
            return {...state, ...defaultState}
        case "CHANGE_LOGIN":
            return {...state, username: payload}
        default:
            return {...state}
    }
}