export default function Inicial() {
  return (
    <>
      {/* Header da página */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="text-muted small">Empresa</p>
          <p className="fw-medium">FICTITIUS SERVICE COMPANY</p>
          <p className="text-muted small">Departamento</p>
          <p className="fw-medium">SEGURANÇA PATRIMONIAL</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="text-end">
            <p className="text-muted small">Thanya S Briel</p>
            <p className="fw-medium">GESTOR</p>
          </div>
          <button className="btn btn-danger px-3 py-2">Sair</button>
        </div>
      </div>

      {/* Ícones de atalho */}
      <div className="row g-3 bg-white p-4 rounded shadow mb-4">
        <div className="col-3 d-flex flex-column align-items-center">
          <div className="bg-light p-3 rounded">
            <span className="fs-3">👤</span>
          </div>
          <p className="small text-primary text-center mt-2">Gestão de Usuários</p>
        </div>
        <div className="col-3 d-flex flex-column align-items-center">
          <div className="bg-light p-3 rounded">
            <span className="fs-3">📄</span>
          </div>
          <p className="small text-primary text-center mt-2">Folha de Pagamento</p>
        </div>
        <div className="col-3 d-flex flex-column align-items-center">
          <div className="bg-light p-3 rounded">
            <span className="fs-3">📊</span>
          </div>
          <p className="small text-primary text-center mt-2">Relatórios</p>
        </div>
        <div className="col-3 d-flex flex-column align-items-center">
          <div className="bg-light p-3 rounded">
            <span className="fs-3">📦</span>
          </div>
          <p className="small text-primary text-center mt-2">Histórico de Pagamentos</p>
        </div>
      </div>

      {/* Cards de informações */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="bg-white rounded shadow p-3">
            <h3 className="small fw-semibold mb-2">MOVIMENTAÇÕES</h3>
            <div className="text-muted small mb-2">Admissões</div>
            <ul className="small list-unstyled">
              <li className="mb-1">👩‍💼 ANGELINE ALEXIA DE SOUZA</li>
              <li className="mb-1">👩‍💼 ANNE CAROLINE FERREIRA SANCHES</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white rounded shadow p-3">
            <h3 className="small fw-semibold mb-2">ANIVERSARIANTES</h3>
            <ul className="small list-unstyled">
              <li className="mb-1">🎂 KAUE PEREIRA DE SOUSA</li>
              <li className="mb-1">🎂 AMANDA APARECIDA SILVA GONCALVES</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
