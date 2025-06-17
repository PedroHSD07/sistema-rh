import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function ListaPerfis({ irParaCadastro }) {
  const [perfis, setPerfis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchPerfis = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5268/api/perfil-usuario');
        console.log(response)
        if (!response.ok) {
          throw new Error('Erro ao buscar perfis.');
        }
        const data = await response.json();
        console.log('data', data);
        setPerfis(data);
        setErro(null);
      } catch (err) {
        setErro(err.message);
        setPerfis([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfis();
  }, []);

  let perfisFiltrados = perfis;

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
          {perfisFiltrados.length > 0 ? (
            <ul className="list-group">
              {perfisFiltrados.map((perfil) => (
                <li key={perfil.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {perfil.descricao}
                  <Button size="sm" variant="outline-primary">Editar</Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">Nenhum perfil encontrado.</p>
          )}
        </>
      )}
    </div>
  );
}
