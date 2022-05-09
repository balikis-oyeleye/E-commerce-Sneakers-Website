import { Header, Products } from "./components";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Products />
      </Container>
    </div>
  );
}

export default App;
