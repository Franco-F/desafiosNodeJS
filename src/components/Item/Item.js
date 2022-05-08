import { Card, Button } from "react-bootstrap";
import { productos } from "../../data/productos";

export default function Item ({productos}){
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={productos.pictureUrl} />
    <Card.Body>
      <Card.Title>{productos.title}</Card.Title>
      <Card.Text>
        <p>Price: {productos.price}</p>
      </Card.Text>
      <Button variant="primary">Más información</Button>
    </Card.Body>
  </Card>
  )
}