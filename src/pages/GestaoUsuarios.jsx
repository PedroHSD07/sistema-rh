import React, { useState } from 'react';
import ListaUsuarios from './ListaUsuarios';
import CadastroUsuario from './CadastroUsuario';

export default function GestaoUsuarios() {
  const [view, setView] = useState('lista');

  return (
    <>
      {view === 'lista' && <ListaUsuarios irParaCadastro={() => setView('cadastro')} />}
      {view === 'cadastro' && <CadastroUsuario voltarParaLista={() => setView('lista')} />}
    </>
  );
}
