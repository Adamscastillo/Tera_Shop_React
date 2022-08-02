import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './img/logo.webp'
import Card from 'react-bootstrap/Card'
import '../header/index.css'
import {
  BsHouseFill,
  BsFillBookmarksFill,
  BsFillPersonFill,
  BsFillKeyFill,
  BsPiggyBankFill,
  BsSearch
} from 'react-icons/bs'

function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Card.Img variant="top" className="logo" src={logo} alt="card" />

      <Navbar.Brand href="#">
        {' '}
        <h1 className="title">Tera-Shop</h1>
      </Navbar.Brand>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link className="styleButton">
              <BsHouseFill></BsHouseFill>
              <Link className="link" to="/">
                {' '}
                Home{' '}
              </Link>
            </Nav.Link>
            <Nav.Link className="styleButton">
              <BsFillBookmarksFill></BsFillBookmarksFill>Categorias
            </Nav.Link>
            <Nav.Link className="styleButton">
              <BsPiggyBankFill></BsPiggyBankFill> Ofertas
            </Nav.Link>
            <NavDropdown
              className="styleButton"
              title="Contato"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="styleButton" href="#action3">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item className="styleButton" href="#action4">
                E-mail
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="styleButton" href="#action5">
                Whatsapp
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="pesquise"
              placeholder="Pesquise"
              className="me-2"
              aria-label="Search"
            />
            <Button className="styleButton" variant="outline-light">
              <BsSearch></BsSearch>{' '}
            </Button>
          </Form>
        </Navbar.Collapse>
        <div className="registration">
          <Button className="styleButton" variant="outline-light">
            <BsFillKeyFill></BsFillKeyFill>
            <Link className="link" to="/cadastro">
              Cadastro{' '}
            </Link>
          </Button>
          <Button variant="outline-light" className="loggin styleButton">
            <BsFillPersonFill></BsFillPersonFill>{' '}
            <Link className="link" to="/login">
              Login
            </Link>
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar
