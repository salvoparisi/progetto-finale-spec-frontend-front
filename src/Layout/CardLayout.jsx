import { Link } from "react-router-dom"

export default function CardLayout({ arrayObj }) {
    return (
        <div>
            {arrayObj.length > 0 && arrayObj.map((obj, i) => {
                return (

                    <div className="d-flex" key={i}>
                        {obj.category && (
                            <img src={`/assets/${obj.category.toLowerCase()}.jpg`} alt="" />
                        )}
                        <Link to={`/${obj.category.toLowerCase()}/${obj.id}`}>

                            <p>{obj.title}</p>
                        </Link>
                        <p>{obj.category}</p>
                    </div>
                )
            })}
        </div>
    )
}