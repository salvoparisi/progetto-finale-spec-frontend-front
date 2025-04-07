import { useEffect, useState, useContext, useMemo } from "react"
import CardLayout from "../Layout/CardLayout"
import GlobalContext from "../context/GlobalContext"

export default function DevicePage() {
    const { apiUrl } = useContext(GlobalContext)
    const [devices, setDevices] = useState([])
    const [filterName, setFilterName] = useState("")
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState(1)

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

    const categoryDevice = useMemo(() => {
        if (category === '') return devices
        return devices.filter(obj => obj.category === category)
    }, [category, devices])

    function handleSort() {
        if (sort === 1) setSort(-1)
        if (sort === -1) setSort(1)
    }

    const sortedTask = useMemo(() => {
        return [...categoryDevice].sort((a, b) => {
            return a.title.localeCompare(b.title) * sort
        })
    }, [sort, categoryDevice])

    return (
        <div>
            <div className="d-flex">
                <input type="text" onChange={(e) => setFilterName(e.target.value)} />
                <div>
                    Categoria:
                    <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Tutti i dispositivi</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Smartwatch">Smartwatch</option>
                    </select>
                </div>
                <button onClick={handleSort} className="btn btn-outline-secondary">{sort === 1 ? "↓" : "↑"}</button>
            </div>
            <CardLayout arrayObj={sortedTask} />
        </div>
    )
}