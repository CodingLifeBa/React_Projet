import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartArrowDown } from "react-icons/fa";
import './Header.css';



function Header() {
 
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Billeterie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/">Evenement</Nav.Link>
            <Nav.Link href="/">Panier</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <div className="nav-cart">
              <button><FaCartArrowDown /></button>
            </div>
        
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;