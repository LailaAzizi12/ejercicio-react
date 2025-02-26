import { Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

Operacion.propTypes = {
  operacionHandler: () => PropTypes.void,
  activadoHandler: () => PropTypes.void,
};

export default function Operacion({ operacionHandler, activadoHandler }) {
  return (
    <>
      <Row>
        <Col>
          <Button
            variant="outline-info"
            onClick={() => operacionHandler("suma")}
            active={activadoHandler("suma")}
          >
            +
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-warning"
            onClick={() => operacionHandler("resta")}
            active={activadoHandler("resta")}
          >
            -
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-primary"
            onClick={() => operacionHandler("multiplicacion")}
            active={activadoHandler("multiplicacion")}
          >
            *
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => operacionHandler("division")}
            active={activadoHandler("division")}
          >
            /
          </Button>
        </Col>
      </Row>
    </>
  );
}
