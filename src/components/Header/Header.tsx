import { Badge, Container, Nav, Navbar } from "react-bootstrap";

const Header: React.FC<any> = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TP E-commerce</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="#about">A propos</Nav.Link>
              <Nav.Link href="#catalogue">Catalogue</Nav.Link>
              <Nav.Link href="#cart">
                Panier{" "}
                <Badge pill bg="primary">
                  0
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
