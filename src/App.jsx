import AppRoutes from '../AppRoutes'
import './App.css'
import NavBar from './components/NavBar'



function App() {
  return (
    <div className='px-4 md:px-32'>
    <NavBar />
    <AppRoutes />
    </div>
  )
}

export default App
