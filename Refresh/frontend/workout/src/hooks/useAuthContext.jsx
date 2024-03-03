import React, { useContext } from 'react'
import {AuthContext} from '../state/AuthState';

export const useAuthContext = () => {
    const context=useContext(AuthContext);
    if(!context){
        throw Error("Use Context must be used inside the context provieder ")
    }

  return context;
}
