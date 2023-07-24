import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ArticleContextProvider } from './context/ArticleContext'

// import of pages:
import Homepage from './pages/Homepage'
// import of components:
import Header from './components/Header'
import Footer from './components/Footer'
import SingleArticle from './components/SingleArticle'

function App() {

  return (
    <HashRouter>
      <ArticleContextProvider>
        <Header/>
          <Routes>
            {/* Set up individual routes */}
            <Route exact path='/' element={<Homepage/>} />
            {/* Route for each addtional page or component */}
            <Route path='/article/' element={<SingleArticle/>}/>
          </Routes>
        <Footer/>
      </ArticleContextProvider>
    </HashRouter>
  )
}

export default App
