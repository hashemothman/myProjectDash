import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './sharedComponents/Sidebar/Sidebar'
import { Footer } from './sharedComponents/Footer/Footer'

function App() {

  return (
    <>
      <div className="body">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
