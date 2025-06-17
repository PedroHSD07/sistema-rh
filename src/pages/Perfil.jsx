import React, { useState } from 'react';
import './Perfil.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Button, Form } from 'react-bootstrap';

const Perfil = () => {
  const [showModal, setShowModal] = useState(false);
  const [campoEditando, setCampoEditando] = useState('');
  const [valor, setValor] = useState('');

  const [dados, setDados] = useState({
    telefone: '+55 34 9 8445-8546',
    email: 'email-exemplo@gmail.com',
    emergencia: '+55 34 9 84xx-xxxx'
  });

  // Abrir modal
  const handleEdit = (campo) => {
    setCampoEditando(campo);
    setValor(dados[campo]);
    setShowModal(true);
  };

  // Salvar alteração
  const handleSave = () => {
    setDados({ ...dados, [campoEditando]: valor });
    setShowModal(false);
  };

  return (
    <div className="container-fluid bg-light min-vh-100">

      {/* Cabeçalho */}
      <header className="bg-white p-4 shadow-sm rounded-3 mb-4">
        <h4 className="mb-3">Gestão de pessoas</h4>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <div className="fw-bold">Alice M Braga</div>
            <div className="text-muted small">Empresa: FICTITIUS SERVICE COMPANY</div>
            <div className="text-muted small">Departamento: SEGURANÇA PATRIMONIAL</div>
          </div>
          <div className="text-end">
            <div className="text-muted small">Gestor:</div>
            <div className="fw-semibold">Thanya S Briel</div>
          </div>
        </div>
      </header>

      <div className="row">
        {/* Painel lateral */}
        <div className="col-md-3">
          <div className="bg-white shadow-sm p-3 rounded-3 text-center">
            <i className="bi bi-person-circle avatar-profile"></i>
            <div className="mt-2 text-primary fw-semibold" style={{ fontSize: '16px' }}>
              ALICE M BRAGA
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="col-md-9">

          {/* Contatos */}
          <div className="card bg-white p-4 shadow-sm rounded-3 mb-3">
            <div className="section-title">Contatos</div>
            <div className="mb-2">
              <span className="info-label">Telefone:</span> {dados.telefone}
              <i className="bi bi-pencil-square edit-icon" onClick={() => handleEdit('telefone')}></i>
            </div>
            <div>
              <span className="info-label">E-mail:</span> {dados.email}
              <i className="bi bi-pencil-square edit-icon" onClick={() => handleEdit('email')}></i>
            </div>
          </div>

          {/* Contato de emergência */}
          <div className="card bg-white p-4 shadow-sm rounded-3 mb-3">
            <div className="section-title">Contato de Emergência</div>
            <div>
              <span className="info-label">Aline G Braga (Mãe):</span> {dados.emergencia}
              <i className="bi bi-pencil-square edit-icon" onClick={() => handleEdit('emergencia')}></i>
            </div>
          </div>

          {/* Endereço */}
          <div className="card bg-white p-4 shadow-sm rounded-3 mb-3">
            <div className="section-title">Endereço</div>
            <div className="text-muted">
              Rua Joaquim Quirino da Silva, 145<br />
              Morada dos Pássaros, Uberlândia MG<br />
              CEP 38406-298
            </div>
          </div>

          {/* Documentos */}
          <div className="card bg-white p-4 shadow-sm rounded-3 mb-3">
            <div className="section-title">Documentos</div>
            <div className="row">
              <div className="col-md-6">
                <div><strong>CPF:</strong> 167.856.766-59</div>
                <div><strong>RG:</strong> 20098709 (PC/MG) - Emissão: 07/10/2010</div>
                <div><strong>Título de Eleitor:</strong> 215123465730 - Seção: 261 - Zona: 364</div>
                <div><strong>CTPS:</strong> 005678101 / Série: 0340 - Emissão: 07/10/2010</div>
              </div>
              <div className="col-md-6">
                <div><strong>NIS:</strong> 207.86458.30-4</div>
                <div><strong>CNS:</strong> 8773582219688827</div>
                <div><strong>Certidão de Nascimento:</strong></div>
                <small>
                  Livro: 0950, Folha: 569, Termo: 131415<br />
                  Cartório: 3 OFÍCIO - Emissão: 10/07/2000
                </small>
              </div>
            </div>
          </div>

          {/* Dados Bancários */}
          <div className="card bg-white p-4 shadow-sm rounded-3 mb-3">
            <div className="section-title">Dados Bancários</div>
            <div className="text-muted">
              Banco: SANTANDER S.A.<br />
              Agência: 4543-1<br />
              Conta: 3459876-2
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Edição */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar {campoEditando}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Perfil;
