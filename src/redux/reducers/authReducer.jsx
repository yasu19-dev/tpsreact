import { retry } from "@reduxjs/toolkit/query";

const initialState = {
    isAuthenticated: false,
    user: null,
    users: [],
};

const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'REGISTER_USER':
            return {...state, users:[...state.users, action.payload]};
        case 'LOGIN_USER':
            const foundUser = state.users.find(u=> u.username === action.payload.username && u.password === action.payload.password)
                if (foundUser){
                    return {...state, isAuthenticated: true, user: foundUser}
                }else {
                    alert('Login ou mdp incorrect');
                    return state;
                }
        case 'LOGOUT_USER':
            return {...state, isAuthenticated: false, users:null};
        
        default:
            return state;

    }
};

export default authReducer;