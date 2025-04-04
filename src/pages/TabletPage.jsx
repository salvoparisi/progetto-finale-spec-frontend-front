import { useEffect, useState, useContext } from "react"
import CardLayout from "../Layout/CardLayout"
import GlobalContext from "../context/GlobalContext"

export default function TabletPage() {
    const { apiUrl } = useContext(GlobalContext)
    const [tablets, setTablets] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/tablets`)
            .then(res => res.json())
            .then(data => setTablets(data))
    }, [])
    return (
        <div>
            <CardLayout arrayObj={tablets} />
        </div>
    )
}