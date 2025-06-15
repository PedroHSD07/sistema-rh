import { useState } from "react";
import { 
  Container, Row, Col, Form, Button, Card, Navbar, Nav, Badge 
} from 'react-bootstrap';

export default function CadastroUsuario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5268/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        setForm({});
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      alert("Erro ao salvar. Verifique a conexão com o servidor.");
    }
  };

  return (
    <Container fluid className="px-0">
      <Row className="g-0">
        <Col md={2} className="bg-dark text-white vh-100 p-3">
          <Navbar.Brand className="text-white mb-4">Gestão de pessoas</Navbar.Brand>
          <Nav className="flex-column">
            <Nav.Link className="text-white">
              <Button variant="secondary" className="w-100">Início</Button>
            </Nav.Link>
          </Nav>
        </Col>

        <Col md={10} className="p-4">
          <Row className="mb-4 justify-content-between align-items-center">
            <Col md={6}>
              <p className="text-muted mb-0">Empresa</p>
              <h5 className="mb-3">FICTITIUS SERVICE COMPANY</h5>
              <p className="text-muted mb-0">Departamento</p>
              <h5>SEGURANÇA PATRIMONIAL</h5>
            </Col>
            <Col md={6} className="text-end">
              <div className="d-flex justify-content-end align-items-center gap-3">
                <div>
                  <p className="text-muted mb-0">Thanya S Briel</p>
                  <Badge bg="info">GESTOR</Badge>
                </div>
                <Button variant="danger">Sair</Button>
              </div>
            </Col>
          </Row>

          {/* DADOS PESSOAIS */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Dados Pessoais</Card.Title>
              <Row>
                <Col md={3} className="mb-3">
                  <Form.Group>
                    <Form.Control name="nome" placeholder="Nome completo" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={3} className="mb-3">
                  <Form.Group>
                    <Form.Control name="nacionalidade" placeholder="Nacionalidade" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={3} className="mb-3">
                  <Form.Group>
                    <Form.Control name="estadoCivil" placeholder="Estado Civil" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={3} className="mb-3">
                  <Form.Group>
                    <Form.Control name="sexo" placeholder="Sexo" onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* CONTATO */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contato</Card.Title>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Control name="telefone" placeholder="Telefone" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Control name="email" placeholder="E-mail" onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* DADOS BANCÁRIOS */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Dados Bancários</Card.Title>
              <Row>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="banco" placeholder="Banco" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="agencia" placeholder="Agência" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="conta" placeholder="Conta" onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* SALARIAL */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Informações Salariais</Card.Title>
              <Row>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="salario" placeholder="Salário que recebe" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="complemento" placeholder="Complemento" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="salarioAdicional" placeholder="Salário adicional" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="reajuste" placeholder="Data do último reajuste" onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Control name="tipoSalario" placeholder="Tipo do salário" onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* AÇÕES */}
          <div className="d-flex justify-content-end gap-3">
            <Button variant="outline-secondary">Descartar</Button>
            <Button variant="primary" onClick={handleSubmit}>Salvar</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}