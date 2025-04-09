import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <Link to="/" className="navbar-brand">Mobile Store</Link>
                    <Link to="/devices" className="nav-link">Dispostivi📱</Link>
                    <Link to='/favorites' className='nav-link'>Preferiti⭐</Link>
                </div>

            </div>
        </nav>
    );
}
