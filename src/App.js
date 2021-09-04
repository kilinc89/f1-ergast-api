import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Champ from "./components/Champion/Champ";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Champ />
      </Container>
    </div>
  );
}

export default App;
