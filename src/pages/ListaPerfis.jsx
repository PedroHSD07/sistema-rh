import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function ListaPerfis({ irParaCadastro, irParaEdicao }) {
  const [perfis, setPerfis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const fetchPerfis = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5268/api/perfil-usuario');
      if (!response.ok) {
        throw new Error('Erro ao buscar perfis.');
      }
      const data = await response.json();
      setPerfis(data);
      setErro(null);
    } catch (err) {
      setErro(err.message);
      setPerfis([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerfis();
  }, []);

  const excluirPerfil = async (id) => {
    const confirmacao = window.confirm('Deseja realmente excluir este perfil?');
    if (!confirmacao) return;

    try {
      const response = await fetch(`http://localhost:5268/api/perfil-usuario/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Perfil excluído com sucesso.');
        fetchPerfis(); // atualiza a lista
      } else {
        const errorData = await response.json();
        alert(`Erro ao excluir: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      alert('Erro de rede ao tentar excluir.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold m-0">Perfis Cadastrados</h1>
        <Button variant="primary" onClick={irParaCadastro}>+ Cadastrar Perfil</Button>
      </div>

      {loading && <p>Carregando...</p>}
      {erro && <div className="alert alert-danger">{erro}</div>}

      {!loading && !erro && (
        <>
          {perfis.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Nível de Acesso</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {perfis.map((perfil) => (
                    <tr key={perfil.id}>
                      <td>{perfil.nome}</td>
                      <td>{perfil.descricao}</td>
                      <td>{perfil.nivelAcesso}</td>
                      <td className="d-flex gap-2">
                        <Button size="sm" variant="outline-primary" onClick={() => irParaEdicao(perfil)}>
                          Editar
                        </Button>
                        <Button size="sm" variant="outline-danger" onClick={() => excluirPerfil(perfil.id)}>
                          Excluir
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-muted">Nenhum perfil encontrado.</p>
          )}
        </>
      )}
    </div>
  );
}
