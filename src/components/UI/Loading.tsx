import { Spinner } from "react-bootstrap";

const Loading: React.FC<any> = ({ text }) => {
  return (
    <div className="text-center mt-5 border py-3">
      <Spinner
        animation="border"
        variant="primary"
        role="status"
        className="mx-auto"
      ></Spinner>
      <p className="text-primary">{text}</p>
    </div>
  );
};

export default Loading;
