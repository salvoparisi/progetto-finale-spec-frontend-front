import { useEffect, useState, useContext } from "react"
import CardLayout from "../Layout/CardLayout"
import GlobalContext from "../context/GlobalContext"

export default function SmartwatchPage() {
    const { apiUrl } = useContext(GlobalContext)
    const [smartwatch, setSmartwatch] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/smartwatches`)
            .then(res => res.json())
            .then(data => setSmartwatch(data))
    }, [])
    return (
        <div>
            <CardLayout arrayObj={smartwatch} />
        </div>
    )
}