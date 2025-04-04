import { createContext } from "react";
const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_API_URL
    return (
        <GlobalContext.Provider value={{ apiUrl }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext