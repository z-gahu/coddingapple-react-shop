import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "./data";
import { useState } from "react";
// import Products from "./Product";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/detail" className="nav-link">
              Detail
            </Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainContent shoes={shoes} />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
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

function MainContent(props) {
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      {/* <Products /> */}
      <Card shoes={props.shoes[0]} i={1} />
      <Card shoes={props.shoes[1]} i={2} />
      <Card shoes={props.shoes[2]} i={3} />
    </>
  );
}

export default App;
