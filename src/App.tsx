import './App.css'
import './styles/globals.css'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import { Routes, Route } from 'react-router-dom';
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
