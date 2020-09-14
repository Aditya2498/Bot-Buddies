import { REQUEST_ROBOTS_SUCCEESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
    CHANGE_SEARCH_FIELD} from './constants.js'


const initStateSearch = {
    searchField:''
}

const initStaterobots ={
    isPending:false,
    robots:[],
    error: ''
}

export const searchRobots = (state= initStateSearch,action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD : 
        return Object.assign({}, state, {searchField:action.payload});
        default:
         return state;
    }
}

export const requestRobots =(state=initStaterobots,action={}) =>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return  Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCEESS:
            return Object.assign({}, state, {robots:action.payload,isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error:action.payload,isPending: false});
        default:
        return state;
    }
}