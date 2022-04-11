import React, {createContext, useState} from 'react';
export const StoreContext = React.createContext();

export default function StoreContextProvider(props) {
  return (<StoreContext.Provider value="context value">
    {props.children}
  </StoreContext.Provider>)
}