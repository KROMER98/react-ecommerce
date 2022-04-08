import { Container, Alert } from "react-bootstrap";

const AlertComponent: React.FC<any> = ({ title, text, bg }) => {
  return (
    <Container>
      <Alert variant={bg} className="text-center">
        <Alert.Heading>{title}</Alert.Heading>
        <p>{text}</p>
      </Alert>
    </Container>
  );
};

export default AlertComponent;
