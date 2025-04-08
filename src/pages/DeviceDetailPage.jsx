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
        <div>
            {device.imgUrl ? <img src={device.imgUrl} alt="" /> : <div>img non disponibile</div>}
            <p>{device.title}</p>
            <p>{device.brand}</p>
            <p>{device.category}</p>
            <p>{device.price}</p>
            Specifiche:
            {device.screenSize != null && <div>{device.screenSize} Pollici</div>}
            {device.storageGB != null && <div>{device.storageGB} GB</div>}
            {device?.stylusSupport !== undefined && <div>{device.stylusSupport ? "Si" : "No"}</div>}
            {device.cameraMP != null && <div>{device.cameraMP} MP</div>}
            {device.batteryLife != null && <div>{device.batteryLife} Ore</div>}
            {device?.hasGPS !== undefined && <div>{device.hasGPS ? "Si" : "No"}</div>}
            {device?.waterproof !== undefined && <div>{device.waterproof ? "Si" : "No"}</div>}
        </div>
    )
}