import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import GlobalContext from "../context/GlobalContext"

export default function ComparatorPage() {
    const { ids, category } = useParams()
    const { apiUrl } = useContext(GlobalContext)
    const [arrayObj, setArrayObj] = useState([])

    useEffect(() => {
        const idArray = ids.split("+");
        if (ids) {
            const fetchData = async () => {
                const promises = idArray.map(id => {
                    const endpoint = category === "smartwatch"
                        ? `${apiUrl}/${category}es/${id}`
                        : `${apiUrl}/${category}s/${id}`;
                    return fetch(endpoint).then(res => res.json());
                });
                const results = await Promise.all(promises);
                const dataArray = results.map(data => data[category]);
                setArrayObj(dataArray);
            };

            fetchData();
        }
    }, [category, ids, apiUrl]);

    return arrayObj.length > 1 ? (
        <div className="container mt-5">
            <h1 className="text-center mb-5 fw-bold">📱 Confronta le Specifiche!</h1>
            <div className="row justify-content-center">
                {arrayObj.map((device, i) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={i}>
                        <div className="card shadow rounded-4 h-100 border-0">
                            <div className="card-body p-4">
                                <h4 className="card-title mb-3 text-primary">{device.title}</h4>
                                <p className="text-muted mb-2"><strong>Brand:</strong> {device.brand}</p>
                                <p className="mb-2"><strong>Categoria:</strong> {device.category}</p>
                                <p className="mb-3"><strong>Prezzo:</strong> €{device.price}</p>
                                <hr />
                                <h6 className="mb-3 text-uppercase text-secondary">Specifiche Tecniche</h6>
                                {device.screenSize && <p><strong>📏 Schermo:</strong> {device.screenSize}"</p>}
                                {device.storageGB && <p><strong>💾 Memoria:</strong> {device.storageGB} GB</p>}
                                {device.stylusSupport !== undefined && <p><strong>🖊 Penna:</strong> {device.stylusSupport ? "✅ Sì" : "❌ No"}</p>}
                                {device.cameraMP && <p><strong>📸 Fotocamera:</strong> {device.cameraMP} MP</p>}
                                {device.batteryLife && <p><strong>🔋 Batteria:</strong> {device.batteryLife} ore</p>}
                                {device.hasGPS !== undefined && <p><strong>📍 GPS:</strong> {device.hasGPS ? "✅ Presente" : "❌ Assente"}</p>}
                                {device.waterproof !== undefined && <p><strong>💧 Waterproof:</strong> {device.waterproof ? "✅ Sì" : "❌ No"}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to={"/devices"} className="btn btn-primary position-fixed bottom-0 start-50 translate-middle-x mb-3 fs-3">Torna alla Lista</Link>
        </div>
    ) : (
        <h2 className="text-danger text-center mt-5">⚠️ Non hai selezionato nessun elemento da confrontare!</h2>
    )
}
