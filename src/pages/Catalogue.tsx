import { Button, Card, Col, Container, Row } from "react-bootstrap";

const App: React.FC<any> = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className="mb-3">Catalogue en ligne</h4>
        </Col>
        <Col className="text-end">
          <span>Total : 1</span>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/100/60" />
            <Card.Body>
              <Card.Title>Produit 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                <strong>
                  1250<sup>F</sup>
                </strong>
              </Card.Text>
              <Button variant="primary">Ajouter au panier</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
