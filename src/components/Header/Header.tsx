import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC<any> = () => {
  let { pathname } = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">TP E-commerce</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Link
                to="/a-propos"
                className={`${pathname === "/a-propos" ? "active" : null}`}
              >
                A propos
              </Link>
              <Link to="/" className={`${pathname === "/" ? "active" : null}`}>
                Catalogue
              </Link>
              <Link
                to="/panier"
                className={`${pathname === "/panier" ? "active" : null}`}
              >
                Panier{" "}
                <Badge pill bg="primary">
                  0
                </Badge>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
