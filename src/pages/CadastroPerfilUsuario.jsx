import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

export default function CadastroPerfilUsuario({ voltarParaLista }) {
  const [form, setForm] = useState({
    nomePerfil: '',
    descricao: '',
    nivelAcesso: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5268/api/perfil-usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        alert('Perfil cadastrado com sucesso!');
        setForm({ nomePerfil: '', descricao: '', nivelAcesso: '' });
        if (voltarParaLista) voltarParaLista();
      } else {
        const errorData = await response.json();
        alert(`Erro ao cadastrar perfil: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      alert('Erro de rede ao tentar salvar o perfil. Verifique o console.');
      console.error(error);
    }
  };

  return (
    <Container className="p-4">
      {/* Cabeçalho com botão de voltar e título */}
      <div className="d-flex align-items-center mb-4">
        <Button className="btn btn-light me-3" onClick={voltarParaLista}>
          &larr; Voltar
        </Button>
        <div>
          <h1 className="fw-bold h4 m-0">Cadastro de Perfil de Usuário</h1>
        </div>
      </div>

      <Card className="shadow-sm p-4">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nome do Perfil</Form.Label>
                <Form.Control
                  type="text"
                  name="nomePerfil"
                  value={form.nomePerfil}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nível de Acesso</Form.Label>
                <Form.Control
                  type="text"
                  name="nivelAcesso"
                  value={form.nivelAcesso}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="descricao"
                  value={form.descricao}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="outline-secondary" type="reset">Descartar</Button>
            <Button variant="primary" type="submit">Salvar</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}