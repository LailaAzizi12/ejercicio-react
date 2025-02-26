import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

ResultadoOperacion.propTypes = {
  primerValor: PropTypes.number.isRequired,
  segundoValor: PropTypes.number.isRequired,
  operacion: PropTypes.string.isRequired,
};

export default function ResultadoOperacion({
  primerValor,
  segundoValor,
  operacion,
}) {
  primerValor = parseFloat(primerValor);
  segundoValor = parseFloat(segundoValor);
  const resultado = () => {
    switch (operacion) {
      case "suma":
        return primerValor + segundoValor;
      case "resta":
        return primerValor - segundoValor;
      case "multiplicacion":
        return primerValor * segundoValor;
      case "division":
        return primerValor / segundoValor;
      default:
        return 0;
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card body>{resultado()}</Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
