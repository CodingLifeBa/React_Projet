import "./App.css"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <Container>
          <h1>Welcome to my shop</h1>
        </Container>
      </main>
      <Footer />
    

    </div>
  );
}

export default App;
