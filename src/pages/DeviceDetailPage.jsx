import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalContext from "../context/GlobalContext"

export default function DeviceDetailPage() {
    const { category, id } = useParams()
    const { apiUrl } = useContext(GlobalContext)
    const [device, setDevice] = useState({})

    useEffect(() => {
        if (category === "smartwatch") {
            fetch(`${apiUrl}/${category}es/${id}`)
                .then(res => res.json())
                .then(data => setDevice(data[category]))
        } else {
            fetch(`${apiUrl}/${category}s/${id}`)
                .then(res => res.json())
                .then(data => setDevice(data[category]))
        }
    }, [apiUrl, category, id]);


    useEffect(() => {
        console.log(device);

    }, [device])



    return (
        <div>

        </div>
    )
}