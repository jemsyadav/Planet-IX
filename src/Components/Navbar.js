import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../src/Styles/Navbar.css'

function BasicExample() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">IX PLANETIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='Navbar' id="basic-navbar-nav ">
          <Nav className="me-auto">
          
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/game">Game</Nav.Link>
            <Nav.Link href="/netempire">NETEMPIRE</Nav.Link>
            <Nav.Link href="/ixfoundation">IX FOUNDATION</Nav.Link>
           
            {/* <Nav.Link href="/ more">MORE</Nav.Link> */}
            
            <Nav.Link href="*/"></Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
            <div className="dropdown">
              <NavDropdown.Item href="#action/3.1">MINT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              ARCADE CLAIM
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">AOC BURN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DROPS </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">RAFFLES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">WALLET</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">IX FOUNDATION</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">GAMEBOOK </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HELP CENTRE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;