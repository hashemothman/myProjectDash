import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './sharedComponents/Sidebar'

function App() {

  return (
    <>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default App
