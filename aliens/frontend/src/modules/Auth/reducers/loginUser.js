import {loginUser, logoutUser} from "../actions/actions"


function loginReducer(state={}, action){
    switch(action.type) {
        case loginUser:
            return {...state, ...action.payload}
        case logoutUser:
            return {}
        default: 
            return state;
    }
}

export default loginReducer;