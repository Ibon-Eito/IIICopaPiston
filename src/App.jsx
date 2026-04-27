import { NavLink, Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import Standings from './components/Standings'
import History from './components/History'
import Upcoming from './components/Upcoming'

export default function App() {
  return (
    <HashRouter>
    <div className="app">
      <header className="header">
        <h1>III <span>Copa</span> Pistón</h1>
        <p>Temporada 3 · 4 equipos · 6 jornadas · Best of 3</p>
      </header>
      <nav>
        <NavLink to="/clasificacion" className={({ isActive }) => isActive ? 'active' : ''}>
          Clasificación
        </NavLink>
        <NavLink to="/historial" className={({ isActive }) => isActive ? 'active' : ''}>
          Historial
        </NavLink>
        <NavLink to="/proximas" className={({ isActive }) => isActive ? 'active' : ''}>
          Próximas jornadas
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/clasificacion" replace />} />
        <Route path="/clasificacion" element={<Standings />} />
        <Route path="/historial" element={<History />} />
        <Route path="/proximas" element={<Upcoming />} />
      </Routes>
    </div>
    </HashRouter>
  )
}