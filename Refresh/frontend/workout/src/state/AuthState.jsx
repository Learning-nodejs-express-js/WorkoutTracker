import {createContext, useReducer} from 'react'

const authreducer=(state,action)=>{
    switch(action.type){
        case "ADD_USER":
            return {user:action.payload}
        default:
            return state;
    }
}


export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(authreducer,{user:null})
return <AuthContext.Provider value={{state,dispatch}}>
    {children}
</AuthContext.Provider>
}