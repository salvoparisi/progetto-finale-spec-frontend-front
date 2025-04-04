import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <Link to="/"><span>Homepage</span></Link>
            <Link to='/smartphones'><span>SmartPhones</span></Link>
            <Link to='/tablets'>Tablets</Link>
            <Link to='/smartwatchs'>SmartWatch</Link>
        </div>
    )
}