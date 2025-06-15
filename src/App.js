import { useState } from "react";
import Layout from './pages/Layout';
import Inicial from './pages/Inicial';
import GestaoEmpresas from './pages/GestaoEmpresas';
import GestaoPerfis from './pages/GestaoPerfis';
import GestaoUsuarios from './pages/GestaoUsuarios';

function App() {
  // Estado que controla qual página está sendo exibida
  const [paginaAtiva, setPaginaAtiva] = useState('inicio');

  // Função para renderizar a página correta
  const renderizarPagina = () => {
    switch (paginaAtiva) {
      case 'inicio':
        return <Inicial />;
      case 'cadastro-empresa':
        return <GestaoEmpresas />;
      case 'cadastro-usuario':
        return <GestaoPerfis />;
      case 'usuarios':
        return <GestaoUsuarios />;
      default:
        return <Inicial />;
    }
  };

  return (
    <Layout paginaAtiva={paginaAtiva} setPaginaAtiva={setPaginaAtiva}>
      {/* O conteúdo da página ativa será renderizado aqui */}
      {renderizarPagina()}
    </Layout>
  );
}

export default App;
