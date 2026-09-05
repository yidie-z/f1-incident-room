import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import IncidentPage from './pages/IncidentPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/i/:slug" element={<IncidentPage />} />
    </Routes>
  )
}
