import { Col } from "react-bootstrap";

const Title: React.FC<any> = ({ text }) => {
  return (
    <Col>
      <h4 className="mb-3">{text}</h4>
    </Col>
  );
};

export default Title;
