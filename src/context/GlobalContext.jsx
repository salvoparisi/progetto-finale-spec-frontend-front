import { createContext, useState } from "react";
const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_API_URL
    const [favorites, setFavorites] = useState([])
    return (
        <GlobalContext.Provider value={{ apiUrl, favorites, setFavorites }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext