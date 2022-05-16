import { HashRouter, Routes, Route } from "react-router-dom";
import { Header, Products } from "./components";
import { Container } from "react-bootstrap";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
