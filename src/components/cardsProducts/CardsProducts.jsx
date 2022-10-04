import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardImage from './imgs/card1.webp'
import CardImage2 from './imgs/card2.webp'
import CardImage3 from './imgs/card3.webp'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './CardsProducts.css'

function CardProdutos() {
  return (
    <Form className='container-card'>
      <Row className='row'>
        <Col className='containerCard' >
          <Card className='card'>
            <Card.Img variant="top" className='card-img' src={CardImage} />
            <Card.Body>
              <Card.Title className='card-title'>Tênis</Card.Title>
              <Card.Text>
                Uma grande Variedades de Tênis: Esportivo, Social,
              </Card.Text>
              <Button variant="primary" className='card-button'>Clique Aqui</Button>
            </Card.Body>
          </Card>
        </Col >
        <Col className='containerCard'>
          <Card style={{ width: '18rem', height: '442px'}}>
            <Card.Img variant="top" className='card-img' src={CardImage2} />
            <Card.Body>
              <Card.Title className='card-title'>Roupas</Card.Title>
              <Card.Text>
                Uma grande Variedades de Tênis: Esportivo, Social,
              </Card.Text>
              <Button variant="primary" className='card-button'>Clique Aqui</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='containerCard'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='card-img' src={CardImage3} />
            <Card.Body>
              <Card.Title className='card-title'>Acessórios</Card.Title>
              <Card.Text>
                Uma grande Variedades de Tênis: Esportivo, Social,
              </Card.Text>
              <Button variant="primary" className='card-button'>Clique Aqui</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Form>
  )
}

export default CardProdutos
