import React, { createContext, useReducer, useEffect } from "react";
// import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, user:action.payload};
        case 'LOGOUT':
            return {...state, user:null}
        case 'AUTH_READY':
            return {...state, user:action.payload, authIsReady:true}
        default:
            return state
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        user: null,
        // for to know if the user is login in from firebase
        authIsReady:false
    });

    useEffect(()=>{
        // to make loading once
        // const once = projectAuth.onAuthStateChanged((user)=>{
            dispatch({type: 'AUTH_READY', });
            // once()
        // })
    }, []);

    // console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};