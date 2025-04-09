import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import CardLayout from "../Layout/CardLayout"
import { Link } from "react-router-dom"

export default function FavoritesPage() {
    const { favorites } = useContext(GlobalContext)
    return (
        <div className="container">
            <div className="row g-3 mt-3 mb-5">
                {favorites.length > 0 ? favorites.map((obj, i) => {
                    return <CardLayout key={i} obj={obj} />
                }) : (
                    <div className="text-center">
                        <h2 className=" mt-5">Non hai ancora aggiunto Niente ai preferiti</h2>
                        <Link to="/devices">Torna alla Lista</Link>
                    </div>
                )}
            </div>
        </div>
    )
}