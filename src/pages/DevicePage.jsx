import { useEffect, useState, useContext, useMemo, useCallback } from "react"
import CardLayout from "../Layout/CardLayout"
import GlobalContext from "../context/GlobalContext"
import ModalComparator from "../components/ModalComparator"
import { useNavigate } from "react-router-dom"

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

export default function DevicePage() {
    const navigate = useNavigate()
    const { apiUrl } = useContext(GlobalContext)
    const [devices, setDevices] = useState([])
    const [filterName, setFilterName] = useState("")
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState(1)
    const [comparator, setComparator] = useState(false)
    const [compareDevice, setCompareDevice] = useState([])
    const [showModal, setShowModal] = useState(false)

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
            setShowModal(true)
        }
    }

    useEffect(() => {
        setCompareDevice([])
    }, [category, comparator])

    function handleSumbitComparator() {
        const idsString = compareDevice.map(item => item.id).join("+")
        navigate(`/comparator/${compareDevice[0].category.toLowerCase()}/${idsString}`)
    }

    const callbackDebounce = useCallback(
        debounce((value) => {
            setFilterName(value)
        }, 300), []
    )

    return (
        <div className="container mt-4 mb-5">
            <h1 className="text-primary text-center">Lista Dispositivi</h1>
            <div className="row justify-content-between align-items-center mb-4">
                {/* Input Cerca */}
                <div className="col-12 col-md-6 mt-5">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cerca per nome"
                            onChange={(e) => callbackDebounce(e.target.value)}
                        />
                    </div>
                </div>

                {/* Sezione Filtri + Bottoni */}
                <div className="col-12 col-md-6 mt-4 d-flex flex-wrap align-items-center justify-content-md-end">
                    {/* Select Categoria */}
                    <div className="me-3 mb-2">
                        <label htmlFor="categorySelect" className="form-label mb-0">Categoria:</label>
                        <select
                            id="categorySelect"
                            className="form-select"
                            onChange={(e) => {
                                if (e.target.value === "") {
                                    setComparator(false)
                                    setCategory(e.target.value)
                                } else {
                                    setCategory(e.target.value)
                                }
                            }}
                            value={category}
                        >
                            <option value="">Tutti i dispositivi</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Smartwatch">Smartwatch</option>
                        </select>
                    </div>

                    {/* Bottone Comparator */}
                    <div className="mt-3">
                        {comparator ? (
                            <button
                                className="btn btn-danger btn-outline-secondary me-3 text-white"
                                onClick={handleComparator}
                            >
                                Esci dalla Modalità Confronta
                            </button>
                        ) : (
                            <button
                                className="btn btn-outline-secondary me-3"
                                onClick={handleComparator}
                            >
                                Confronta Dispositivi
                            </button>
                        )}
                    </div>

                    {/* Modal */}
                    <ModalComparator
                        setCategory={setCategory}
                        setShowModal={setShowModal}
                        showModal={showModal}
                        setComparator={setComparator}
                    />

                    {/* Bottone Sort */}
                    <div className="mt-3">
                        <button
                            onClick={handleSort}
                            className="btn btn-outline-secondary"
                        >
                            {sort === 1 ? "A-Z ↓" : "Z-A ↑"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="row g-3">
                {sortedTask.length > 0 ? sortedTask.map((obj, i) => {
                    if (!obj || !obj.title || !obj.id || !obj.category) return null;
                    return (

                        <CardLayout
                            key={i}
                            obj={obj}
                            comparator={comparator}
                            setCompareDevice={setCompareDevice}
                            category={category}
                        />

                    );
                }) : (
                    <h1 className="text-danger text-center mt-5">Nessun Risultato Trovato</h1>
                )}
            </div>

            {/* Bottone Confronta/Seleziona */}
            {compareDevice.length > 1 && comparator ? (
                <button
                    className="btn btn-primary position-fixed bottom-0 start-50 translate-middle-x mb-3 fs-3"
                    style={{ zIndex: 1050 }}
                    onClick={handleSumbitComparator}
                >
                    Confronta
                </button>
            ) : comparator && (
                <button
                    className="btn btn-secondary position-fixed bottom-0 start-50 translate-middle-x mb-3 fs-3"
                    style={{ zIndex: 1050 }}
                    onClick={() => alert('Selezionare piu di 1 Elemento')}
                >
                    Seleziona
                </button>
            )}
        </div>

    )
}
