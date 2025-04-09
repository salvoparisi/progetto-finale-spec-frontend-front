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

    return (
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
                <div className="col-12 col-md-6 mb-4">
                    <h1 className="mb-3">{device.title}</h1>
                    <p className="lead mb-3">{device.brand}</p>
                    <p><strong>Categoria:</strong> {device.category}</p>
                    <p><strong>Prezzo:</strong> €{device.price}</p>

                    <div className="mt-4">
                        <h5>Specifiche:</h5>
                        {device.screenSize != null && <div><strong>Dimensione Schermo:</strong> {device.screenSize} Pollici</div>}
                        {device.storageGB != null && <div><strong>Memoria:</strong> {device.storageGB} GB</div>}
                        {device?.stylusSupport !== undefined && <div><strong>Supporto Penna:</strong> {device.stylusSupport ? "✅" : "❌"}</div>}
                        {device.cameraMP != null && <div><strong>Fotocamera:</strong> {device.cameraMP} MP</div>}
                        {device.batteryLife != null && <div><strong>Autonomia Batteria:</strong> {device.batteryLife} Ore</div>}
                        {device?.hasGPS !== undefined && <div><strong>Supporto GPS:</strong> {device.hasGPS ? "✅" : "❌"}</div>}
                        {device?.waterproof !== undefined && <div><strong>WaterProof:</strong> {device.waterproof ? "✅" : "❌"}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
