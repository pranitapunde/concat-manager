import { createContext, useReducer, useState } from "react";
import ThemeReducer from "./ThemeReducer";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  


    const initialState = {
        darkTheme : false
    }

    const [state, dispatch] = useReducer( ThemeReducer,initialState)



    return (
        <ThemeContext.Provider value={{...state,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
