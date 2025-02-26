import PropTypes from "prop-types";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

Entradas.propTypes = {
  numeroA: PropTypes.number.isRequired,
  numeroB: PropTypes.number.isRequired,
  numeroAHandler: () => PropTypes.void,
  numeroBHandler: () => PropTypes.void,
};

export default function Entradas({
  numeroA,
  numeroB,
  numeroAHandler,
  numeroBHandler,
}) {
  return (
    <>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingInput" label="A" className="mb-3">
            <Form.Control
              type="number"
              onChange={numeroAHandler}
              value={numeroA}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingPassword" label="B">
            <Form.Control
              type="number"
              onChange={numeroBHandler}
              value={numeroB}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
}
