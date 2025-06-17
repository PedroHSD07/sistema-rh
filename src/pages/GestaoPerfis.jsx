import React, { useState } from 'react';
import ListaPerfis from './ListaPerfis';
import CadastroPerfilUsuario from './CadastroPerfilUsuario';

export default function GestaoPerfis() {
  const [modo, setModo] = useState('lista'); // 'lista' | 'cadastro' | 'edicao'
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  const irParaCadastro = () => {
    setPerfilSelecionado(null);
    setModo('cadastro');
  };

  const irParaEdicao = (perfil) => {
    setPerfilSelecionado(perfil);
    setModo('edicao');
  };

  const voltarParaLista = () => {
    setPerfilSelecionado(null);
    setModo('lista');
  };

  return (
    <>
      {modo === 'lista' && (
        <ListaPerfis
          irParaCadastro={irParaCadastro}
          irParaEdicao={irParaEdicao}
        />
      )}

      {(modo === 'cadastro' || modo === 'edicao') && (
        <CadastroPerfilUsuario
          voltarParaLista={voltarParaLista}
          perfilEditando={perfilSelecionado}
        />
      )}
    </>
  );
}
