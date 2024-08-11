import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "./data";
import { useState } from "react";
// import Products from "./Product";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>메인페이지임</div>} />
        <Route path="/about" element={<div>상세페이지임 </div>} />
      </Routes>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      {/* <Products /> */}
      <Card shoes={shoes[0]} i={1} />
      <Card shoes={shoes[1]} i={2} />
      <Card shoes={shoes[2]} i={3} />
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
        alt="shoes1"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
