import React, { useState, useEffect } from 'react';

// Componente para a tela de listagem de empresas
export default function ListaEmpresas({ irParaCadastro }) {
  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para buscar os dados da API quando o componente for montado
  useEffect(() => {
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
        setEmpresas([]); // Limpa os dados em caso de erro
      } finally {
        setLoading(false);
      }
    };

    fetchEmpresas();
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      {/* Cabeçalho com título e botões */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold m-0">Empresas Cadastradas</h1>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={irParaCadastro}>
            + Cadastrar
          </button>
        </div>
      </div>

      {/* Exibição de Loading ou Erro */}
      {loading && <p>Carregando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Tabela de Empresas */}
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
                    <td>
                      <button className="btn btn-sm btn-outline-primary">Editar</button>
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
