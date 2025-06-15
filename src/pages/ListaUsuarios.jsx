import { useState } from "react";

export default function ListaUsuarios({ irParaCadastro }) {
  const [filtros, setFiltros] = useState({
    cargo: "",
    nome: "",
    status: "",
    admissao: "",
    departamento: ""
  });

  const usuarios = Array(10).fill({
    nome: "Sarah Eastern",
    cargo: "SE",
    status: "ATIVO",
    admissao: "2023/09/17",
    departamento: "Administração"
  });

  const handleFiltro = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleRemover = (usuario) => {
    if (window.confirm(`Deseja remover ${usuario.nome}?`)) {
      alert(`Usuário ${usuario.nome} removido!`);
      // Aqui entraria sua lógica real de remoção (ex: chamada à API)
    }
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      {/* Header */}
      <header className="bg-white p-4 d-flex justify-content-between align-items-center shadow rounded mb-4">
        <div>
          <h1 className="fs-4 fw-bold m-0">ATENDIMENTO RH</h1>
        </div>
        <button className="btn btn-danger">Sair</button>
      </header>

      {/* Card Principal */}
      <section className="bg-white p-4 rounded shadow mb-4">
        {/* Filtros */}
        <form className="row g-3 mb-4">
          <div className="col-md-2">
            <input type="text" name="cargo" placeholder="Cargo" value={filtros.cargo} onChange={handleFiltro} className="form-control" />
          </div>
          <div className="col-md-2">
            <input type="text" name="nome" placeholder="Nome" value={filtros.nome} onChange={handleFiltro} className="form-control" />
          </div>
          <div className="col-md-2">
            <input type="text" name="status" placeholder="Status" value={filtros.status} onChange={handleFiltro} className="form-control" />
          </div>
          <div className="col-md-3">
            <input type="date" name="admissao" value={filtros.admissao} onChange={handleFiltro} className="form-control" />
          </div>
          <div className="col-md-2">
            <input type="text" name="departamento" placeholder="Departamento" value={filtros.departamento} onChange={handleFiltro} className="form-control" />
          </div>
          <div className="col-md-1 d-flex align-items-center">
            <button type="button" className="btn btn-dark w-100">🔍</button>
          </div>
        </form>

        {/* Tabela */}
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Cargo</th>
                <th>Nome</th>
                <th>Status</th>
                <th>Data de admissão</th>
                <th>Departamento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((user, i) => (
                <tr key={i}>
                  <td>{user.cargo}</td>
                  <td>
                    <span className="text-primary text-decoration-underline" style={{ cursor: "pointer" }}>{user.nome}</span>
                  </td>
                  <td>
                    <span className="badge bg-success text-uppercase px-3 py-2">{user.status}</span>
                  </td>
                  <td>{user.admissao}</td>
                  <td>{user.departamento}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-dark btn-sm">💲 Folha</button>
                      <button className="btn btn-dark btn-sm">✏️ Editar</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleRemover(user)}>🗑 Remover</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}