import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// import of pages:
import Homepage from './pages/Homepage'
// import of components:
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <HashRouter>
      <Header/>
        <Routes>
          {/* Set up individual routes */}
          <Route exact path='/' element={<Homepage/>} />
          {/* Route for each addtional page or component */}
        </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
