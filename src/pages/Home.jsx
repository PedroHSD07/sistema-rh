import React from 'react';
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home({ setPaginaAtiva }) {
  return (
    <div className="bg-light min-vh-100 font-helvetica">
      {/* Botão Sair */}
      <div className="text-end me-3 mt-3">
        <button className="btn btn-outline-dark btn-sm">Sair</button>
      </div>

      {/* Conteúdo principal */}
      <div className="container mt-4 mb-5">
        {/* Cabeçalho */}
        <nav className="navbar bg-transparent shadow-none mb-4">
          <span className="fs-4 fw-bold text-dark">Gestão de pessoas</span>
        </nav>

        {/* Informações da Colaboradora */}
        <div className="bg-white rounded-3 shadow-sm p-4 d-flex justify-content-between align-items-center">
          {/* Lado esquerdo */}
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-person-circle avatar-icon"></i>
            <div>
              <div className="fs-5 fw-medium text-primary">Alice M Braga</div>
              <div className="text-muted" style={{ fontSize: '14px' }}>CONTROLE PATRIMONIAL</div>
            </div>
          </div>

          {/* Lado direito */}
          <div className="text-end text-secondary" style={{ fontSize: '14px' }}>
            <div className="text-dark">Empresa: FICTITIUS SERVICE COMPANY</div>
            <div className="text-dark">Departamento: SEGURANÇA PATRIMONIAL</div>
            <div className="text-dark">Gestor: Thanya S Briel</div>
          </div>
        </div>

        {/* Cartões de navegação */}
        <div className="row justify-content-center mt-5">

          {/* Card Perfil */}
          <div className="col-md-5 mx-2">
            <div
              className="position-relative bg-white border rounded-4 shadow-sm p-4 card-hover text-center h-100"
              style={{ cursor: 'pointer' }}
              onClick={() => setPaginaAtiva('perfil')}
            >
              <i className="bi bi-person card-icon"></i>
              <div className="card-title mt-3">ACESSAR PERFIL</div>
              <i className="bi bi-arrow-right-circle card-arrow"></i>
            </div>
          </div>

          {/* Card Demonstrativo */}
          <div className="col-md-5 mx-2">
            <div
              className="position-relative bg-white border rounded-4 shadow-sm p-4 card-hover text-center h-100"
              style={{ cursor: 'pointer' }}
              onClick={() => setPaginaAtiva('demonstrativo')}
            >
              <i className="bi bi-currency-dollar card-icon"></i>
              <div className="card-title mt-3">DEMONSTRATIVOS</div>
              <i className="bi bi-arrow-right-circle card-arrow"></i>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
