import React, { createContext, useState } from "react";

// export the context so that other components can import it
export const StoreContext = createContext();

function StoreContextProvider(props){
	return (
        <StoreContext.Provider>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; // export this component as default
