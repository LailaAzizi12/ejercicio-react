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
        return segundoValor !== 0 ? primerValor / segundoValor : "Error";
      default:
        return "";
    }
  };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <Card
              style={{
                backgroundColor: "rgb(228, 251, 246)",
                border: "rgb(228, 251, 246)",
              }}
            >
              <Card.Body>
                <Card.Title>Resultado</Card.Title>
                <Card.Text>{resultado()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
