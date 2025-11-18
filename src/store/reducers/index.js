import { HYDRATE } from "next-redux-wrapper";
import { moderatorsReducer } from "./moderatorsReducer";
import { quizReducer } from "./quizReducer";
import { requestGroupReducer } from "./requestGroupReducer";

const { combineReducers } = require("redux");
const { userReducer } = require("./userReducer");


export const mainReducer = combineReducers({
    user: userReducer,
    moderators: moderatorsReducer,
    quiz: quizReducer,
    requestGroup: requestGroupReducer
})

export const reducer = (state,action) => {
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload,
        }
        if(state.count) nextState.count = state.count;
        return nextState;
    }else{
        return mainReducer;
    }
}