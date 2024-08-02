import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
// import data from "./data";
// import { useState } from "react";
import Products from "./Product";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // let [shoes] = useState(data);

  <Routes>
    <Route path="/" element={<div>메인페이지임</div>} />
    <Route path="/about" element={<div>상세페이지임 </div>} />
  </Routes>;

  return (
    <div>
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
      <Products />
      {/* <div className="container">
        <div className="row">
          <div className="col-m-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
              alt="1"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </div>
          <div className="col-m-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
              alt="2"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-m-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
              alt="3"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
