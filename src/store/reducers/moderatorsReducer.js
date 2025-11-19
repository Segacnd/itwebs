
const defaultState = {
    loaded:false,
    moderators: []
}

export const moderatorsReducer = (state={...defaultState}, {type,payload}) => {
    switch(type){
        case "LOAD_MODERATORS":
            return {...state, moderators:[...payload],loaded:true}
        case "CLEAR_MODERATORS":
            return {...state, ...defaultState}
        default:
            return {...state}
    }
}