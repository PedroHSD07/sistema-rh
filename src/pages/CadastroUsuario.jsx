import { useState } from "react";

const Input = (props) => (
  <input
    {...props}
    className="border px-3 py-2 rounded w-full text-sm text-gray-700"
  />
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded text-white ${props.variant === "outline"
      ? "bg-gray-500 hover:bg-gray-600"
      : "bg-blue-600 hover:bg-blue-700"
      }`}
  >
    {children}
  </button>
);

export default function CadastroUsuario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-4">Gestão de pessoas</h1>
        <Button className="w-full bg-gray-700 hover:bg-gray-800">Início</Button>
      </aside>

      <main className="flex-1 overflow-auto p-8 space-y-6">
        <div className="flex justify-between items-center">
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
            <Button className="bg-red-600 hover:bg-red-700">Sair</Button>
          </div>
        </div>

        {/* DADOS PESSOAIS */}
        <section className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold">Dados Pessoais</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Input name="nome" placeholder="Nome completo" onChange={handleChange} />
            <Input name="nacionalidade" placeholder="Nacionalidade" onChange={handleChange} />
            <Input name="estadoCivil" placeholder="Estado Civil" onChange={handleChange} />
            <Input name="sexo" placeholder="Sexo" onChange={handleChange} />
          </div>
        </section>

        {/* CONTATO */}
        <section className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold">Contato</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input name="telefone" placeholder="Telefone" onChange={handleChange} />
            <Input name="email" placeholder="E-mail" onChange={handleChange} />
          </div>
        </section>

        {/* DADOS BANCÁRIOS */}
        <section className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold">Dados Bancários</h2>
          <div className="grid grid-cols-3 gap-4">
            <Input name="banco" placeholder="Banco" onChange={handleChange} />
            <Input name="agencia" placeholder="Agência" onChange={handleChange} />
            <Input name="conta" placeholder="Conta" onChange={handleChange} />
          </div>
        </section>

        {/* SALARIAL */}
        <section className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold">Informações Salariais</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Input name="salario" placeholder="Salário que recebe" onChange={handleChange} />
            <Input name="complemento" placeholder="Complemento" onChange={handleChange} />
            <Input name="salarioAdicional" placeholder="Salário adicional" onChange={handleChange} />
            <Input name="reajuste" placeholder="Data do último reajuste" onChange={handleChange} />
            <Input name="tipoSalario" placeholder="Tipo do salário" onChange={handleChange} />
          </div>
        </section>

        {/* AÇÕES */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Descartar</Button>
          <Button>Salvar</Button>
        </div>
      </main>
    </div>
  );
}
