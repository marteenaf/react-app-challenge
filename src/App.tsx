import './App.css'
import './styles/globals.css'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import { Routes, Route } from 'react-router-dom';

/**
 * Main app component
 * Using some very simple Routes to connect the login and dashboard pages
 * @returns {JSX.Element}
 */
function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
