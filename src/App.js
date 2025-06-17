import { useState } from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';

import Layout from './pages/Layout';
import Inicial from './pages/Inicial';
import GestaoEmpresas from './pages/GestaoEmpresas';
import GestaoPerfis from './pages/GestaoPerfis';
import GestaoUsuarios from './pages/GestaoUsuarios';

//Adicionado por M.Tulio
import Demonstrativo from './pages/Demonstrativo';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

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

      //Adicionado por M.Tulio
      case 'demonstrativo':
        return <Demonstrativo setPaginaAtiva={setPaginaAtiva} />;
      case 'home':
        return <Home setPaginaAtiva={setPaginaAtiva} />;
      case 'perfil':
        return <Perfil setPaginaAtiva={setPaginaAtiva} />;
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
