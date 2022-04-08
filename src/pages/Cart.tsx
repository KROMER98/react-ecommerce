import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import AlertComponent from "../components/UI/Alert";
import Loading from "../components/UI/Loading";
import Title from "../components/UI/Title";
import { totalProductCart } from "../functions/totalProductCart";
import { totalPrice } from "../functions/totalPrice";

const Cart: React.FC<any> = ({ list }) => {
  // State
  const tvaSocial = 1;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const totalTTC = (totalPrice(list) * tvaSocial) / 100 + totalPrice(list);

  // Event

  // Render
  return (
    <>
      {hasError ? (
        <AlertComponent
          title={"Erreur du serveur"}
          text={"Veuillez réessayer plus tard."}
          bg={"danger"}
        />
      ) : (
        <Container>
          <Row>
            <Title text={"Mon Panier"} />
            <Col className="text-end"></Col>
          </Row>
          <Row>
            {isLoading ? (
              <Loading text={"Chargement en cours..."} />
            ) : (
              <>
                {!list.length && (
                  <>
                    <AlertComponent text={"Aucune données..."} bg={"info"} />
                  </>
                )}

                <Col lg={8}>
                  <Table striped bordered hover>
                    <tbody>
                      {list.map((cart: any) => (
                        <tr key={Math.random()}>
                          <td>
                            <img
                              src={"../src/assets/img/products/" + cart.image}
                              className="thumbnail me-2"
                              width={90}
                              alt={cart.image}
                            />
                            <span>{cart.name}</span>
                          </td>
                          <td width={150}>
                            <InputGroup className="mb-3">
                              <InputGroup.Text>-</InputGroup.Text>
                              <FormControl
                                className="text-center"
                                aria-label="Input Qte"
                                value={cart.qte}
                              />
                              <InputGroup.Text>+</InputGroup.Text>
                            </InputGroup>
                          </td>
                          <td>
                            {cart.price}
                            <sup>F</sup>
                          </td>
                          <td className="text-center">
                            <Button variant="danger">X</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
                <Col
                  className="border p-3"
                  lg={4}
                  style={{ position: "relative", height: "320px" }}
                >
                  <Row>
                    <div className="overview-product-cart mb-3">
                      <span className="">
                        {totalProductCart(list)} articles
                      </span>
                      <span className="float-end">
                        Total {totalPrice(list)}
                        <sup>F</sup>
                      </span>
                    </div>
                    <hr />
                    <div className="">
                      <span>TVA social</span>
                      <span className="float-end">{tvaSocial} %</span>
                    </div>
                    <div className="">
                      <strong>Total TTC</strong>
                      <span className="float-end">{totalTTC}</span>
                    </div>
                    <div className="">
                      <Button
                        style={{
                          position: "absolute",
                          bottom: "15px",
                          width: "92%",
                        }}
                        variant="success"
                      >
                        Commander
                      </Button>
                    </div>
                  </Row>
                </Col>
              </>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Cart;
