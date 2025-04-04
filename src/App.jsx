import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SmartphonePage from './pages/SmartphonePage'
import SmartwatchPage from './pages/SmartwatchPage'
import TabletPage from './pages/TabletPage'
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
          <Route path='/smartphones' element={<SmartphonePage />} />
          <Route path='/tablets' element={<TabletPage />} />
          <Route path='/smartwatchs' element={<SmartwatchPage />} />
        </Routes>
      </GlobalProvider >
    </BrowserRouter>
  )
}

export default App
