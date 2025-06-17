import React, { useState } from 'react';
import ListaEmpresas from './ListaEmpresas';
import CadastroEmpresa from './CadastroEmpresa';

export default function GestaoEmpresas() {
  const [modo, setModo] = useState('lista'); // 'lista', 'cadastro', 'edicao'
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);

  const irParaCadastro = () => {
    setEmpresaSelecionada(null);
    setModo('cadastro');
  };

  const irParaEdicao = (empresa) => {
    setEmpresaSelecionada(empresa);
    setModo('edicao');
  };

  const voltarParaLista = () => {
    setEmpresaSelecionada(null);
    setModo('lista');
  };

  return (
    <>
      {modo === 'lista' && (
        <ListaEmpresas
          irParaCadastro={irParaCadastro}
          irParaEdicao={irParaEdicao}
        />
      )}

      {(modo === 'cadastro' || modo === 'edicao') && (
        <CadastroEmpresa
          voltarParaLista={voltarParaLista}
          empresaEditando={empresaSelecionada}
        />
      )}
    </>
  );
}
