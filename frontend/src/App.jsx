import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav.jsx'
import Home from './pages/Home.jsx'
import Compare from './pages/Compare.jsx'
import SpeedTest from './pages/SpeedTest.jsx'
import Calculator from './pages/Calculator.jsx'
import Coverage from './pages/Coverage.jsx'
import Offline from './pages/Offline.jsx'
import Trials from './pages/Trials.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/speed" element={<SpeedTest />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/offline" element={<Offline />} />
          <Route path="/trials" element={<Trials />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App
