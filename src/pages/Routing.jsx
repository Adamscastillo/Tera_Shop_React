import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Notfoud from './NotFoud/Notfoud'
import Cadastro from './Cadastro/Cadastro'
import Produto from './Produto/Produto'
import Login from './Login/Login'
import NavBar from '../components/header'
import Footer from '../components/footer/Footer'
import PageProduct from './PageProduct/PageProduct'

function Routing() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Produto />} exact path="/produto" />
        <Route element={<Cadastro />} exact path="/cadastro" />
        <Route element={<Login />} exact path="/login" />
        <Route element={<Notfoud />} exact path="/*" />
        <Route element={<PageProduct />} exact path="/page" />
        
      </Routes>
      <Footer />
    </Router>
  )
}
export default Routing
