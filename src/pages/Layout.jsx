import React from 'react';

export default function Layout({ children, paginaAtiva, setPaginaAtiva }) {
  return (
    <div className="d-flex vh-100">
      {/* Barra Lateral */}
      <aside className="w-25 bg-dark text-white p-4" style={{minWidth: '280px'}}>
        <h1 className="h5 fw-bold mb-4">ATENDIMENTO RH</h1>
        <nav className="d-flex flex-column gap-2">
            {/* Botão Início */}
            <button 
                className={`btn text-start ${paginaAtiva === 'inicio' ? 'btn-secondary' : 'btn-dark'}`}
                onClick={() => setPaginaAtiva('inicio')}
            >
                Início
            </button>
            {/* Botão Cadastro de Empresas */}
            <button 
                className={`btn text-start ${paginaAtiva === 'cadastro-empresa' ? 'btn-secondary' : 'btn-dark'}`}
                onClick={() => setPaginaAtiva('cadastro-empresa')}
            >
                Gestão de Empresas
            </button>
            {/* Botão Cadastro de Perfil */}
            <button 
                className={`btn text-start ${paginaAtiva === 'cadastro-usuario' ? 'btn-secondary' : 'btn-dark'}`}
                onClick={() => setPaginaAtiva('cadastro-usuario')}
            >
                Cadastro de Perfil de Usuários
            </button>
            <button 
              className={`btn text-start ${paginaAtiva === 'usuarios' ? 'btn-secondary' : 'btn-dark'}`}
               onClick={() => setPaginaAtiva('usuarios')}
              >
                Gestão de Usuários
            </button>
        </nav>
      </aside>

      {/* Conteúdo Principal que vem do App.js */}
      <main className="flex-grow-1 bg-light overflow-auto p-4">
        {children}
      </main>
    </div>
  );
}
