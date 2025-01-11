import './App.css'
import List from './pages/List'
import Add from './pages/Add'
import Edit from './pages/Edit'
import { Route,Routes } from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
