import React from 'react';
import { Button } from 'react-bootstrap';

export default function ListaPerfis({ irParaCadastro }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold m-0">Perfis Cadastrados</h1>
        <Button variant="primary" onClick={irParaCadastro}>+ Cadastrar Perfil</Button>
      </div>
      <p className="text-muted">Nenhum perfil exibido (a lógica de busca ainda será implementada).</p>
    </div>
  );
}
