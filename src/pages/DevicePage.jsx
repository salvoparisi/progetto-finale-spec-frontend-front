import { useEffect, useState, useContext, useMemo } from "react"
import CardLayout from "../Layout/CardLayout"
import GlobalContext from "../context/GlobalContext"
import ModalComparator from "../components/ModalComparator"

export default function DevicePage() {
    const { apiUrl } = useContext(GlobalContext)
    const [devices, setDevices] = useState([])
    const [filterName, setFilterName] = useState("")
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState(1)
    const [comparator, setComparator] = useState(false)

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

    function handleComparator() {
        if (comparator) {
            setComparator(false)
        } else {
            setComparator(true)
        }
    }

    return (
        <div className="container mt-4 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group w-50 mt-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cerca per nome"
                        onChange={(e) => setFilterName(e.target.value)}
                    />
                </div>
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <label htmlFor="categorySelect" className="form-label mb-0">Categoria:</label>
                        <select
                            id="categorySelect"
                            className="form-select"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Tutti i dispositivi</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Smartwatch">Smartwatch</option>
                        </select>
                    </div>
                    {comparator ? <button className="btn btn-danger btn-outline-secondary mt-4 me-3 text-white" onClick={handleComparator} >Esci dalla Modalità Confronta</button>
                        : <button className="btn btn-outline-secondary mt-4 me-3" onClick={handleComparator} >Confronta Dispositivi</button>}
                    <ModalComparator
                        setCategory={setCategory}
                        comparator={comparator}
                    />
                    <button
                        onClick={handleSort}
                        className="btn btn-outline-secondary mt-4"
                    >
                        {sort === 1 ? "↓" : "↑"}
                    </button>
                </div>
            </div>
            <div className="row g-3">
                {sortedTask.length > 0 && sortedTask.map((obj, i) => {
                    return <CardLayout key={i} obj={obj} comparator={comparator} />
                })}
            </div>
        </div>
    )
}
