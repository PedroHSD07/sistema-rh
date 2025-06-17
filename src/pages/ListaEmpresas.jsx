import React, { useState, useEffect } from 'react';

export default function ListaEmpresas({ irParaCadastro, irParaEdicao }) {
  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmpresas = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5268/api/empresas');
      if (!response.ok) {
        throw new Error('Falha ao buscar dados das empresas.');
      }
      const data = await response.json();
      setEmpresas(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setEmpresas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const excluirEmpresa = async (id) => {
    const confirmacao = window.confirm('Deseja realmente excluir esta empresa?');
    if (!confirmacao) return;

    try {
      const response = await fetch(`http://localhost:5268/api/empresas/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Empresa excluída com sucesso.');
        fetchEmpresas(); // Atualiza lista após exclusão
      } else {
        const errorData = await response.json();
        alert(`Erro ao excluir: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      alert('Erro de rede ao tentar excluir empresa.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold m-0">Empresas Cadastradas</h1>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={irParaCadastro}>
            + Cadastrar
          </button>
        </div>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">Nome da Empresa</th>
                <th scope="col">CNPJ / Identificador</th>
                <th scope="col">Cidade/UF</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {empresas.length > 0 ? (
                empresas.map((empresa) => (
                  <tr key={empresa.id}>
                    <td>{empresa.nome}</td>
                    <td>{empresa.numero}</td>
                    <td>{`${empresa.endereco.cidade}/${empresa.endereco.uf}`}</td>
                    <td className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => irParaEdicao(empresa)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => excluirEmpresa(empresa.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">Nenhuma empresa encontrada.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
