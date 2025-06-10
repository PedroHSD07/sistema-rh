export default function InicialUsuario() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-4">ATENDIMENTO RH</h1>
        <button className="bg-gray-700 w-full py-2 rounded">Início</button>
      </aside>

      <main className="flex-1 bg-gray-100 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-gray-500">Empresa</p>
            <p className="font-medium">FICTITIUS SERVICE COMPANY</p>
            <p className="text-sm text-gray-500">Departamento</p>
            <p className="font-medium">SEGURANÇA PATRIMONIAL</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Thanya S Briel</p>
              <p className="font-medium">GESTOR</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Sair</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded">
              <span className="text-3xl">👤</span>
            </div>
            <p className="text-sm text-blue-600 text-center mt-2">Gestão de Usuários</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded">
              <span className="text-3xl">📄</span>
            </div>
            <p className="text-sm text-blue-600 text-center mt-2">Folha de Pagamento</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded">
              <span className="text-3xl">📊</span>
            </div>
            <p className="text-sm text-blue-600 text-center mt-2">Relatórios</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded">
              <span className="text-3xl">📦</span>
            </div>
            <p className="text-sm text-blue-600 text-center mt-2">Histórico de Pagamentos</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-semibold mb-2">MOVIMENTAÇÕES</h3>
            <div className="text-xs text-gray-500 mb-2">Admissões</div>
            <ul className="text-sm">
              <li className="mb-1">👩‍💼 ANGELINE ALEXIA DE SOUZA</li>
              <li className="mb-1">👩‍💼 ANNE CAROLINE FERREIRA SANCHES</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-semibold mb-2">ANIVERSARIANTES</h3>
            <ul className="text-sm">
              <li className="mb-1">🎂 KAUE PEREIRA DE SOUSA</li>
              <li className="mb-1">🎂 AMANDA APARECIDA SILVA GONCALVES</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
