import { useState } from "react";

export default function ListaUsuarios() {
  const [filtros, setFiltros] = useState({
    cargo: "",
    nome: "",
    status: "",
    admissao: "",
    departamento: ""
  });

  const usuarios = Array(10).fill({
    nome: "Sarah Eastern",
    cargo: "SE",
    status: "ATIVO",
    admissao: "2023/09/17",
    departamento: "Administração"
  });

  const handleFiltro = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <header className="bg-white p-4 flex justify-between items-center shadow rounded">
        <div>
          <h1 className="text-xl font-bold">ATENDIMENTO RH</h1>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Sair</button>
      </header>

      <section className="bg-white mt-4 p-4 rounded shadow">
  <div className="flex justify-between items-center mb-4">
    <button className="bg-black text-white px-4 py-2 rounded text-sm">+ Adicionar Usuário</button>

    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-200 text-sm px-2 py-1 rounded">2023/09/17 ✕</span>
      <span className="bg-gray-200 text-sm px-2 py-1 rounded">Administração ✕</span>
      <span className="bg-gray-200 text-sm px-2 py-1 rounded">Sarah Eastern ✕</span>
      <span className="bg-gray-200 text-sm px-2 py-1 rounded">Ativo ✕</span>
      <button className="bg-gray-700 text-white px-2 py-1 rounded">Arquivo ⭮</button>
    </div>
  </div>

        <div className="flex flex-wrap gap-4 mb-4">
                <input type="text" name="cargo" placeholder="Cargo" value={filtros.cargo} onChange={handleFiltro} className="border p-2 rounded w-40" />
                <input type="text" name="nome" placeholder="Nome" value={filtros.nome} onChange={handleFiltro} className="border p-2 rounded w-40" />
                <input type="text" name="status" placeholder="Status" value={filtros.status} onChange={handleFiltro} className="border p-2 rounded w-40" />
                <input type="date" name="admissao" value={filtros.admissao} onChange={handleFiltro} className="border p-2 rounded w-48" />
                <input type="text" name="departamento" placeholder="Departamento" value={filtros.departamento} onChange={handleFiltro} className="border p-2 rounded w-40" />
                <button className="bg-gray-700 text-white px-4 py-2 rounded">🔍</button>
            </div>


        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Cargo</th>
              <th className="p-2">Nome</th>
              <th className="p-2">Status</th>
              <th className="p-2">Data de admissão</th>
              <th className="p-2">Departamento</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="p-2">{user.cargo}</td>
                <td className="p-2 text-blue-600 underline cursor-pointer">{user.nome}</td>
                <td className="p-2">
                  <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded">{user.status}</span>
                </td>
                <td className="p-2">{user.admissao}</td>
                <td className="p-2">{user.departamento}</td>
                <td className="p-2 space-x-2">
                  <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">💲 Folha</button>
                  <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm">✏️ Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
