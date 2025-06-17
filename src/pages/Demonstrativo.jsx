import React from 'react';
import './Demonstrativo.css';

const Demonstrativo = () => {
  return (
    <div className="bg-light py-4">
      <div className="container" style={{ maxWidth: '80%' }}>
        <div className="card bg-white p-4 shadow-sm rounded-3">
          {/* Título */}
          <div className="title-section">Meus demonstrativos de pagamento</div>

          {/* Informações gerais */}
          <div className="row mb-4">
            <div className="col-md-6">
              <p><strong>Mês:</strong> 09/2024 - Cálculo Mensal</p>
              <p><strong>Tipo de pagamento:</strong> Depósito bancário</p>
              <p><strong>Data:</strong> 01/10/2024</p>
            </div>
            <div className="col-md-6">
              <p><strong>Banco:</strong> Santander</p>
              <p><strong>Agência:</strong> 4543-1</p>
              <p><strong>Conta:</strong> 3459876-2</p>
            </div>
          </div>

          {/* Tabela de valores */}
          <div className="table-responsive mb-4">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Descrição</th>
                  <th>Referência</th>
                  <th>Descontos</th>
                  <th>Proventos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salário Base</td>
                  <td>220h</td>
                  <td></td>
                  <td className="value-positive">R$ 3.500,00</td>
                </tr>
                <tr>
                  <td>Vale Transporte</td>
                  <td>-</td>
                  <td className="value-negative">R$ 150,00</td>
                  <td></td>
                </tr>
                <tr>
                  <td>INSS</td>
                  <td>-</td>
                  <td className="value-negative">R$ 280,00</td>
                  <td></td>
                </tr>
                <tr>
                  <td>FGTS</td>
                  <td>-</td>
                  <td></td>
                  <td className="value-positive">R$ 280,00</td>
                </tr>
                <tr className="table-light">
                  <td colSpan="2" className="text-end fw-bold">Total de Descontos</td>
                  <td className="value-negative">R$ 430,00</td>
                  <td></td>
                </tr>
                <tr className="table-light">
                  <td colSpan="3" className="text-end fw-bold">Valor líquido a receber</td>
                  <td className="value-highlight">R$ 3.070,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Informações adicionais */}
          <div className="row mb-4">
            <div className="col-md-6">
              <p><strong>Base INSS:</strong> R$ 3.500,00</p>
              <p><strong>Salário base:</strong> R$ 3.500,00</p>
            </div>
            <div className="col-md-6">
              <p><strong>Base FGTS:</strong> R$ 3.500,00</p>
              <p><strong>Nº de dependentes:</strong> 1</p>
            </div>
          </div>

          {/* Dropdown e botão */}
          <div className="mb-3">
            <label htmlFor="mes" className="form-label">Selecione outro mês</label>
            <select className="form-select" id="mes">
              <option>08/2024</option>
              <option>07/2024</option>
              <option>06/2024</option>
            </select>
          </div>
          <button className="btn btn-primary w-100 mt-3">EXIBIR MAIS RESULTADOS</button>
        </div>
      </div>
    </div>
  );
};

export default Demonstrativo;
