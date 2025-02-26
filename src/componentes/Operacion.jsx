import { Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

Operacion.propTypes = {
  numeroA: PropTypes.number,
  numeroB: PropTypes.number,
  operacionHandler: () => PropTypes.void,
  activadoHandler: () => PropTypes.void,
};

export default function Operacion({
  numeroA,
  numeroB,
  operacionHandler,
  activadoHandler,
}) {
  const comprobacionHandler = (operacion) => {
    if (numeroA && numeroB) operacionHandler(operacion);
  };
  return (
    <>
      <Row className="mt-3">
        <Col className="d-grid gap-2">
          <Button
            size="lg"
            className="suma"
            variant="outline-info"
            onClick={() => comprobacionHandler("suma")}
            active={activadoHandler("suma")}
          >
            +
          </Button>
        </Col>
        <Col className="d-grid gap-2">
          <Button
            size="lg"
            variant="outline-warning"
            onClick={() => comprobacionHandler("resta")}
            active={activadoHandler("resta")}
          >
            -
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-grid gap-2">
          <Button
            size="lg"
            variant="outline-success"
            onClick={() => comprobacionHandler("multiplicacion")}
            active={activadoHandler("multiplicacion")}
          >
            x
          </Button>
        </Col>
        <Col className="d-grid gap-2">
          <Button
            size="lg"
            variant="outline-secondary"
            onClick={() => comprobacionHandler("division")}
            active={activadoHandler("division")}
          >
            /
          </Button>
        </Col>
      </Row>
    </>
  );
}
