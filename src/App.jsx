import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DevicePage from './pages/DevicePage';
import Homepage from './pages/Homepage'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/devices' element={<DevicePage />} />
        </Routes>
      </GlobalProvider >
    </BrowserRouter>
  )
}

export default App
