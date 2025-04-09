import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DevicePage from './pages/DevicePage';
import Homepage from './pages/Homepage'
import DeviceDetailPage from './pages/DeviceDetailPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { GlobalProvider } from './context/GlobalContext'
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/devices' element={<DevicePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/:category/:id' element={<DeviceDetailPage />} />
        </Routes>
      </GlobalProvider >
    </BrowserRouter>
  )
}

export default App
