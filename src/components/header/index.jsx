import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './img/logo.webp'
import Card from 'react-bootstrap/Card'
import '../header/index.css'

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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Categorias</Nav.Link>
            <Nav.Link href="#action2">Ofertas</Nav.Link>
            <NavDropdown title="Contato" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action4">E-mail</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Whatsapp</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="pesquise"
              placeholder="Pesquise"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Procurar </Button>
          </Form>
        </Navbar.Collapse>
        <div className="registration">
          <Button variant="outline-light">Cadastro</Button>
          <Button variant="outline-light" className="loggin">
            loggin
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar
