import { createContext, useReducer } from "react";
import ContactReducer from "./ContactReducer";

const contactContext = createContext()

export const ContactProvider = ({ children }) => {

    const initialState = {
        contacts: [{
            id: 1,
            name: "Dad",
            number: "+2345678910",
            relation: "family"
        },
        {
            id: 2,
            name: "Dad",
            number: "+2345678910",
            relation: "family"
        }]
    }

    
   
    const [state, dispatch] = useReducer( ContactReducer, initialState)

    return (
        <contactContext.Provider value={{ contacts: state.contacts, dispatch }}>
            {children}
        </contactContext.Provider>

    )
}

export default contactContext