import React, { useState } from 'react';
import ListaPerfis from './ListaPerfis';
import CadastroPerfilUsuario from './CadastroPerfilUsuario';

export default function GestaoPerfis() {
  const [view, setView] = useState('lista');

  return (
    <>
      {view === 'lista' && <ListaPerfis irParaCadastro={() => setView('cadastro')} />}
      {view === 'cadastro' && <CadastroPerfilUsuario voltarParaLista={() => setView('lista')} />}
    </>
  );
}
