import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';

function NavScrollExample() {
  
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/drugs',
      query: { search: searchTerm },
    });
  };

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
              <NavDropdown.Item href="https://patreon.com">Donate</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Drugs" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/drugs">Search Drugs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/drugs/alcohol">Alcohol</NavDropdown.Item>
              <NavDropdown.Item href="/drugs/benzodiazepines">Benzodiazepines</NavDropdown.Item>
              <NavDropdown.Item href="/drugs/cannabis">Cannabis</NavDropdown.Item>
              <NavDropdown.Item href="/drugs/methamphetamine">Methamphetamine</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Guides" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/guides/testing">Reagent Testing</NavDropdown.Item>
              <NavDropdown.Item href="/guides/boofing">Boofing</NavDropdown.Item>
              <NavDropdown.Item href="/guides/intravenous">Intravenous</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://discord.gg/s8CFunneAg" target="_blank" rel="noopener noreferrer">Discord</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-secondary" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;