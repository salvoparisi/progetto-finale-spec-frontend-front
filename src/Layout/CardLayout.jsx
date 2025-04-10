import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

export default function CardLayout({ obj, comparator }) {
    const { favorites, setFavorites } = useContext(GlobalContext);
    const [star, setStar] = useState(false);

    function handleStar() {
        if (star === false) {
            setFavorites(prev => [...prev, obj]);
            setStar(true);
        } else {
            setFavorites(prev => prev.filter(i => i.id !== obj.id));
            setStar(false);
        }
    }

    useEffect(() => {
        const isFavorite = favorites.some(fav => fav.title === obj.title);
        setStar(isFavorite);
    }, [favorites, obj.id]);

    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="card h-100 position-relative">
                {comparator && <input type="checkbox" className="position-absolute m-3" style={{ height: '20px', width: '20px' }} />}


                <button
                    className="btn position-absolute top-0 end-0 m-2 p-1"
                    onClick={handleStar}
                    style={{ fontSize: '1.5rem', zIndex: 2, height: '40px', width: '40px' }}
                >
                    {star ? "⭐" : "★"}
                </button>

                <div className="card-body d-flex flex-column align-items-center">
                    {obj.category && (
                        <img
                            src={`/assets/${obj.category.toLowerCase()}.jpg`}
                            alt={obj.category}
                            className="img-fluid"
                            style={{ height: '200px', width: '200px', objectFit: 'cover' }}
                        />
                    )}
                    <Link to={`/${obj.category.toLowerCase()}/${obj.id}`} className="text-center mt-3">
                        <p>{obj.title}</p>
                    </Link>
                    <p className="text-center text-muted">{obj.category}</p>
                </div>
            </div>
        </div>
    );
}
