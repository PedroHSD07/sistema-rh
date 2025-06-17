import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

export default function CadastroPerfilUsuario({ voltarParaLista, perfilEditando }) {
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    nivelAcesso: 0
  });

  useEffect(() => {
    if (perfilEditando) {
      setForm(perfilEditando);
    }
  }, [perfilEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'nivelAcesso' ? parseInt(value, 10) || 0 : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = perfilEditando
      ? `http://localhost:5268/api/perfil-usuario/${perfilEditando.id}`
      : 'http://localhost:5268/api/perfil-usuario';

    const method = perfilEditando ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        alert(`Perfil ${perfilEditando ? 'atualizado' : 'cadastrado'} com sucesso!`);
        voltarParaLista();
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      alert('Erro de rede. Veja o console.');
      console.error(error);
    }
  };

  return (
    <Container className="p-4">
      <div className="d-flex align-items-center mb-4">
        <Button className="btn btn-light me-3" onClick={voltarParaLista}>
          &larr; Voltar
        </Button>
        <h1 className="fw-bold h4 m-0">
          {perfilEditando ? 'Editar Perfil de Usuário' : 'Cadastro de Perfil de Usuário'}
        </h1>
      </div>

      <Card className="shadow-sm p-4">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nome do Perfil</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nível de Acesso</Form.Label>
                <Form.Control
                  type="number"
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
            <Button variant="primary" type="submit">
              {perfilEditando ? 'Atualizar' : 'Salvar'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
