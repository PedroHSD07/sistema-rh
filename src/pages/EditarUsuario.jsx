import { useState } from "react";

export default function EditarUsuario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sections = [
    { title: "Contrato de trabalho", fields: ["Situação", "Tipo Contrato", "Data Admissao", "Cargo", "Departamento", "Centro Custo", "Escala Trabalho"] },
    { title: "Dados pessoais", fields: ["Nome", "Nacionalidade", "Estado Civil", "Sexo"] },
    { title: "Contatos", fields: ["Telefone", "Email"] },
    { title: "Contatos de emergência", fields: ["Nome Emergencia", "Parentesco", "Telefone Emergencia"] },
    { title: "Endereço", fields: ["Endereco"] },
    { title: "Documentos", fields: ["cpf", "rg", "orgao Emissor", "Data Emissao", "Titulo de Eleitor", "ctps"] },
    { title: "Dados bancários", fields: ["Banco", "Agencia", "Conta"] },
    { title: "Informações salariais", fields: ["Salario", "Complemento", "Salario Adicional", "Reajuste", "Tipo Salario"] },
  ];

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-4" style={{ width: 260 }}>
        <h1 className="fs-4 fw-bold mb-4">Gestão de pessoas</h1>
        <button className="btn btn-secondary w-100 mb-2">Início</button>
      </aside>
      {/* Main */}
      <main className="flex-grow-1 bg-light overflow-auto p-4">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <div className="text-muted small">Empresa</div>
            <div className="fw-medium">FICTITIUS SERVICE COMPANY</div>
            <div className="text-muted small mt-2">Departamento</div>
            <div className="fw-medium">SEGURANÇA PATRIMONIAL</div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="text-end">
              <div className="text-muted small">Thanya S Briel</div>
              <div className="fw-medium">GESTOR</div>
            </div>
            <button className="btn btn-danger">Sair</button>
          </div>
        </div>

        {/* Form Sections */}
        <form>
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded shadow-sm p-4 mb-4">
              <h2 className="fs-5 fw-semibold mb-3">{section.title}</h2>
              <div className="row g-3">
                {section.fields.map((field) => (
                  <div className="col-md-6" key={field}>
                    <input
                      type="text"
                      className="form-control"
                      name={field}
                      placeholder={field}
                      value={form[field] || ""}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-outline-secondary">
              Descartar
            </button>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
