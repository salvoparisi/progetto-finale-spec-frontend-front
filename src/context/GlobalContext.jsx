import { createContext, useEffect, useState } from "react";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const saveFavorites = localStorage.getItem('favorites');
        if (saveFavorites) {
            setFavorites(JSON.parse(saveFavorites));
        }
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else if (favorites.length === 0) {
            localStorage.clear()
        }
    }, [favorites]);

    return (
        <GlobalContext.Provider value={{ apiUrl, favorites, setFavorites }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
