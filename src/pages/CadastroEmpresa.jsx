import React, { useState, useEffect } from 'react';

export default function CadastroEmpresa({ voltarParaLista, empresaEditando }) {
  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      complemento: '',
      cidade: '',
      uf: '',
      cep: '',
    },
  });

  useEffect(() => {
    if (empresaEditando) {
      setFormData(empresaEditando);
    }
  }, [empresaEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      endereco: {
        ...formData.endereco,
        numero: parseInt(formData.endereco.numero, 10) || 0,
      },
    };

    const url = empresaEditando
      ? `http://localhost:5268/api/empresas/${empresaEditando.id}`
      : 'http://localhost:5268/api/empresas';

    const method = empresaEditando ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert(`Empresa ${empresaEditando ? 'atualizada' : 'criada'} com sucesso!`);
        voltarParaLista();
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      alert('Erro de rede. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-light me-3" onClick={voltarParaLista}>
          &larr; Voltar
        </button>
        <h1 className="fw-bold m-0 h4">
          {empresaEditando ? 'Editar Empresa' : 'Cadastro de Nova Empresa'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
        <fieldset className="mb-4">
          <legend className="h5 fw-semibold mb-3">Dados da Empresa</legend>
          <div className="row g-3">
            <div className="col-md-8">
              <label htmlFor="nome" className="form-label">Nome da Empresa</label>
              <input type="text" className="form-control" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="numero" className="form-label">Número (CNPJ/Identificador)</label>
              <input type="text" className="form-control" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="h5 fw-semibold mb-3">Endereço</legend>
          <div className="row g-3">
            <div className="col-md-9">
              <label htmlFor="rua" className="form-label">Rua</label>
              <input type="text" className="form-control" id="rua" name="endereco.rua" value={formData.endereco.rua} onChange={handleChange} required />
            </div>
            <div className="col-md-3">
              <label htmlFor="endereco-numero" className="form-label">Número</label>
              <input type="number" className="form-control" id="endereco-numero" name="endereco.numero" value={formData.endereco.numero} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="bairro" className="form-label">Bairro</label>
              <input type="text" className="form-control" id="bairro" name="endereco.bairro" value={formData.endereco.bairro} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="complemento" className="form-label">Complemento</label>
              <input type="text" className="form-control" id="complemento" name="endereco.complemento" value={formData.endereco.complemento} onChange={handleChange} />
            </div>
            <div className="col-md-5">
              <label htmlFor="cidade" className="form-label">Cidade</label>
              <input type="text" className="form-control" id="cidade" name="endereco.cidade" value={formData.endereco.cidade} onChange={handleChange} required />
            </div>
            <div className="col-md-3">
              <label htmlFor="uf" className="form-label">UF</label>
              <input type="text" className="form-control" id="uf" name="endereco.uf" value={formData.endereco.uf} onChange={handleChange} required maxLength="2" />
            </div>
            <div className="col-md-4">
              <label htmlFor="cep" className="form-label">CEP</label>
              <input type="text" className="form-control" id="cep" name="endereco.cep" value={formData.endereco.cep} onChange={handleChange} required />
            </div>
          </div>
        </fieldset>

        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary" onClick={voltarParaLista}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary px-4">
            {empresaEditando ? 'Atualizar Empresa' : 'Salvar Empresa'}
          </button>
        </div>
      </form>
    </div>
  );
}
