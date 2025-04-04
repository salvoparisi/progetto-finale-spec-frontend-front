import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SmartphonePage from './pages/SmarthwatchPage'
import SmartwatchPage from './pages/SmartphonePage'
import TabletPage from './pages/TabletPage'
import Homepage from './pages/Homepage'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/smartphones' element={<SmartphonePage />} />
        <Route path='/tablets' element={<TabletPage />} />
        <Route path='/smartwatchs' element={<SmartwatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
