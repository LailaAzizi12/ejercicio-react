import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./App.css";
import { PlusCircleDotted } from "react-bootstrap-icons";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingInput" label="A" className="mb-3">
              <Form.Control type="number" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingPassword" label="B">
              <Form.Control type="number" placeholder="Password" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-info">+</Button>
          </Col>
          <Col>
            <Button variant="outline-warning">-</Button>
          </Col>
          <Col>
            <Button variant="outline-primary">*</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">/</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
