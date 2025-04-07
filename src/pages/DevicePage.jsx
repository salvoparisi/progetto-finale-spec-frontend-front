import { useEffect, useState, useContext, useMemo } from "react"
import CardLayout from "../Layout/CardLayout"
import GlobalContext from "../context/GlobalContext"

export default function DevicePage() {
    const { apiUrl } = useContext(GlobalContext)
    const [devices, setDevices] = useState([])
    const [filterName, setFilterName] = useState("")

    useEffect(() => {
        const urls = [
            `${apiUrl}/tablets?search=${filterName}`,
            `${apiUrl}/smartphones?search=${filterName}`,
            `${apiUrl}/smartwatches?search=${filterName}`
        ]
        Promise.all(urls.map(url => fetch(url).then(res => res.json())))
            .then(res => {
                const arr = res.flat()
                setDevices(arr)
            })
    }, [filterName])



    return (
        <div>
            <input type="text" onChange={(e) => setFilterName(e.target.value)} />
            <CardLayout arrayObj={devices} />
        </div>
    )
}