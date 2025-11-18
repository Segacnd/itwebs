
const defaultState = {
    done:false,

    quizType: 'main',
    manySiteType: '',
    siteType: '',

    funcs: [],
    design : '',
    deadline: null,

    blocks: null,
    
    seoTime: '',
    seoDops: [],
    seoPages: null,

    lastProgress: 0,
    support: '',
    pages: null,
}

export const quizReducer = (state={...defaultState},{type,payload}) => {
    switch(type){
        case "SET_DONE":{
            return {...state,done: !state.done};
        }
        case "SET_SEO_PAGES":{
            return{...state,seoPages:payload};
        }
        case "SET_SEO_DOPS":{
            return{...state,seoDops:state.seoDops.includes(payload)?[...state.seoDops].filter(item=>item!=payload):[...state.seoDops,payload]}
        }
        case "SET_MANY_SITE_TYPE":{
            return {...state, manySiteType: payload};
        }
        case "SET_LAST_PROGRESS":{
            return {...state, lastProgress:payload}
        }
        case "RESET_QUIZ":{
            return {...state,...defaultState}
        }
        case "SET_QUIZ_TYPE":{
            return {...state, quizType: payload};
        }
        case "SET_SITE_TYPE":{
            return {...state, siteType: payload}
        }
        case "SET_PAGES_COUNT":{
            return {...state,pages:payload}
        }
        case "SET_SEO_TIME":{
            return {...state,seoTime:payload};
        }
        case "SET_FUNC":{
            return {...state,funcs:state.funcs.includes(payload)?[...state.funcs].filter(item=>item!=payload):[...state.funcs,payload]};
        }
        case "REMOVE_FUNC":{
            return {...state, funcs: [...state.funcs].filter(item=>item!=payload)};
        }
        case "SET_DESIGN":{
            return {...state, design: payload}
        }
        case "SET_DEADLINE":{
            return {...state,deadline: payload}
        }
        case "SET_SUPPORT":{
            return {...state, support: payload}
        }
        case "SET_BLOCKS":{
            return {...state, blocks: payload}
        }
        default:{
            return {...state};
        }
    }
}