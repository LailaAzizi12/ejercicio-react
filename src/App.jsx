import { Container } from "react-bootstrap";
import "./App.css";

import { useState } from "react";
import ResultadoOperacion from "./componentes/resultadoOperacion";
import Entradas from "./componentes/Entradas";
import Operacion from "./componentes/Operacion";

function App() {
  const [numeroA, setnumeroA] = useState("");
  const [numeroB, setnumeroB] = useState("");
  const [operacion, setOperacion] = useState("");

  const numeroAHandler = (event) => {
    setnumeroA(event.target.value);
  };
  const numeroBHandler = (event) => {
    setnumeroB(event.target.value);
  };

  const operacionHandler = (operacionClick) => {
    setOperacion(operacionClick);
  };
  const activadoHandler = (operacionActive) => {
    return operacionActive === operacion;
  };
  return (
    <>
      <Container>
        <Container>
          <Entradas
            numeroA={numeroA}
            numeroB={numeroB}
            numeroBHandler={numeroBHandler}
            numeroAHandler={numeroAHandler}
          ></Entradas>
          <Operacion
            operacionHandler={operacionHandler}
            activadoHandler={activadoHandler}
          ></Operacion>
        </Container>
        <ResultadoOperacion
          primerValor={numeroA}
          segundoValor={numeroB}
          operacion={operacion}
        ></ResultadoOperacion>
      </Container>
    </>
  );
}

export default App;
