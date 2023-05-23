import styles from './Navbar.module.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" className={styles.navbarColor}>
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src="/assets/logo.png" alt="DrugSafe logo" width="50" height="50" />
          <span className={styles.home}>DrugSafe</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <NavDropdown title="Info" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Drugs" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/drugs/cannabis">Cannabis</NavDropdown.Item>
              <NavDropdown.Item href="/drugs/methamphetamine">Methamphetamine</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Guides" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/guides/testing">Reagent Testing</NavDropdown.Item>
              <NavDropdown.Item href="/guides/boofing">Boofing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://discord.com">Discord</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;