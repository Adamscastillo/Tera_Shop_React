import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Notfoud from './NotFoud/Notfoud'
import Cadastro from './Cadastro/Cadastro'
import Produto from './Produto/Produto'
import Login from './Login/login'
import NavBar from '../components/header'
import Footer from '../components/footer/Footer'

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
      </Routes>
      <Footer />
    </Router>
  )
}
export default Routing
