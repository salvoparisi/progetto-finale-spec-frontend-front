import { useContext, useEffect, useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const CardLayout = memo(({ obj, comparator, setCompareDevice = () => { }, category }) => {
    const { favorites, setFavorites } = useContext(GlobalContext);
    const [star, setStar] = useState(false);
    const [check, setCheck] = useState(false);
    const location = useLocation()

    if (!obj || !obj.title || !obj.id || !obj.category) {
        return (
            <div className="col-12 col-md-4 col-lg-3">
                <div className="card h-100 d-flex align-items-center justify-content-center text-danger p-4">
                    Dati del dispositivo non validi.
                </div>
            </div>
        );
    }

    function handleStar() {
        if (!obj.title) return;
        if (star === false) {
            setFavorites(prev => [...prev, obj]);
            setStar(true);
        } else {
            setFavorites(prev => prev.filter(i => i.title !== obj.title));
            setStar(false);
        }
    }

    useEffect(() => {
        const isFavorite = favorites.some(fav => fav.title === obj.title);
        setStar(isFavorite);
    }, [favorites, obj.title]);

    useEffect(() => {

        if (check) {
            setCompareDevice(prev => {
                const alreadyAdded = prev.some(i => i.title === obj.title);
                return alreadyAdded ? prev : [...prev, obj];
            });
        } else {
            setCompareDevice(prev => prev.filter(i => i.title !== obj.title));
        }
    }, [check]);

    useEffect(() => {
        setCheck(false)
    }, [category, comparator])

    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="card h-100 position-relative">
                {comparator && (
                    <input
                        type="checkbox"
                        onChange={(e) => setCheck(e.target.checked)}
                        checked={check}
                        className="position-absolute m-3"
                        style={{ height: '20px', width: '20px' }}
                    />
                )}

                <button
                    className="btn position-absolute top-0 end-0 m-2 p-1"
                    onClick={handleStar}
                    style={{ fontSize: '1.5rem', zIndex: 2, height: '40px', width: '40px' }}
                >
                    {location.pathname.includes("favorites") ? "❌" : star ? "⭐" : "★"}
                </button>

                <div className="card-body d-flex flex-column align-items-center">
                    <img
                        src={`/assets/${obj.category.toLowerCase()}.jpg`}
                        alt={obj.category}
                        className="img-fluid"
                        style={{ height: '200px', width: '200px', objectFit: 'cover' }}
                    />
                    <Link to={`/${obj.category.toLowerCase()}/${obj.id}`} className="text-center mt-3">
                        <p>{obj.title}</p>
                    </Link>
                    <p className="text-center text-muted">{obj.category}</p>
                </div>
            </div>
        </div>
    );
})

export default CardLayout