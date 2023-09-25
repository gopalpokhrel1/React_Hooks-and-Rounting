
import './App.css'


import First from './Pages/First';
import Navbar from './Components/Navbar';
import Second from './Pages/Second';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Third from './Pages/Third';
import Footer from './Components/Footer';





function App() {
 
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/third'  element={<Third/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
