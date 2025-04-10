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

    return device ? (
        <div className="container mt-5">
            <div className="row">
                {/* Sezione immagine */}
                <div className="col-12 col-md-6 mb-4">
                    {device.imgUrl ? (
                        <img src={device.imgUrl} alt={device.title} className="img-fluid rounded shadow-sm" style={{ height: '600px', width: '600px', objectFit: 'cover' }} />
                    ) : (
                        <div className="alert alert-warning" role="alert">
                            Immagine non disponibile
                        </div>
                    )}
                </div>

                {/* Dettagli dispositivo */}
                <div className="col-12 col-md-6 col-lg-4 mb-4">
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
            </div>
        </div>
    ) : (
        <h1 className="text-center text-danger mt-5">Nessun ID trovato</h1>
    )
}
