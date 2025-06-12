import React, { useState } from 'react';
import ListaEmpresas from './ListaEmpresas';
import CadastroEmpresa from './CadastroEmpresa';

export default function GestaoEmpresas() {
  // Estado para controlar a visão atual: 'lista' ou 'cadastro'
  const [view, setView] = useState('lista');
  
  // Função para renderizar o componente correto com base na view
  const renderView = () => {
    switch (view) {
      case 'lista':
        // Passa a função para mudar para a tela de cadastro
        return <ListaEmpresas irParaCadastro={() => setView('cadastro')} />;
      case 'cadastro':
        // Passa a função para voltar para a tela de lista
        return <CadastroEmpresa voltarParaLista={() => setView('lista')} />;
      default:
        return <ListaEmpresas irParaCadastro={() => setView('cadastro')} />;
    }
  };

  return (
    <div>
      {renderView()}
    </div>
  );
}
