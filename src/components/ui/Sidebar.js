import { Navbar, Nav, Button } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="flex-column align-items-start p-4 vh-100"
      style={{ minWidth: 220 }}
    >
      <Navbar.Brand className="mb-4 fs-4 fw-bold">Gestão de pessoas</Navbar.Brand>
      <Nav className="flex-column w-100">
        <Nav.Link as="span" className="p-0 mb-2 w-100">
          <Button variant="secondary" className="w-100">Início</Button>
        </Nav.Link>
        {/* Adicione outros links aqui se precisar */}
      </Nav>
    </Navbar>
  );
}
