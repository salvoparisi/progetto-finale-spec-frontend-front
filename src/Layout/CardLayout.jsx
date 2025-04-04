export default function CardLayout({ arrayObj }) {
    return (
        <div>
            {arrayObj.length > 0 && arrayObj.map((obj, i) => {
                return (
                    <div className="d-flex" key={i}>
                        <p>{obj.title}</p>
                        <p>{obj.category}</p>
                    </div>
                )
            })}
        </div>
    )
}