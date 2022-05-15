import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Products } from "./components";
import { Container } from "react-bootstrap";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
