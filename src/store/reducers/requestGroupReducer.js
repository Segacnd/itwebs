
const defaultState = {
    group: 'consult'
}

export const requestGroupReducer = (state={...defaultState},{type,payload}) => {
    switch(type){
        case "SET_DEVELOPMENT_GROUP":{
            return {...state,group:'development'}
        }
        case "SET_MARKETING_GROUP":{
            return {...state,group:'marketing'}
        }
        case "SET_CONSULT_GROUP":{
            return {...state,group:'consult'}
        }
        case "SET_SMM_GROUP":{
            return {...state, group:'smm'}
        }
        case "SET_PROMOTION_GROUP":{
            return {...state, group: 'promotion'}
        }
        default:
            return {...state}
    }
}