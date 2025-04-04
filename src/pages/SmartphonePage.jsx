import { useEffect, useState, useContext } from "react"
import CardLayout from "../Layout/CardLayout"
import GlobalContext from "../context/GlobalContext"

export default function SmartphonePage() {
    const { apiUrl } = useContext(GlobalContext)
    const [smartphones, setSmartphones] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/smartphones`)
            .then(res => res.json())
            .then(data => setSmartphones(data))
    }, [])
    return (
        <div>
            <CardLayout arrayObj={smartphones} />
        </div>
    )
}