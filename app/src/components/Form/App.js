import React, { useState } from "react";
//importando o componente da api para chamadas.
import api from "../../service/api";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");

  const [estado, setEstado] = useState("");
  const [categoria, setCategoria] = useState("");

  const [cadastroOK, setCadastroOK] = useState(false);

  //fuction para submit para criação de novo contato atraves do formulário
  async function handleSubmit() {
    const data = {
      NOME: nome,
      EMAIL: email,
      TELEFONE: telefone,
      CIDADE: cidade,
      ESTADO: estado,
      CATEGORIA: categoria,
    };
    //console.log(data);
    await api.post("/contato/", data);
    //console.log(response);

    setCadastroOK(true);
  }

  //Definição simples para mensagem de cadastro realizado
  let msgFinal;
  if (cadastroOK === true) {
    msgFinal = <p>Contato cadastrado com sucesso!</p>;
  }
  return (
    <div classNameName="App">
      <body className="theme-red">
        <section className="content">
          <div className="container-fluid">
            <div className="block-header">
              <h1>Adicionar Novo Contato</h1>
            </div>
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>Formulário:</h2>
                  </div>
                  <div className="body">
                    <div className="row clearfix">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nome"
                              value={nome}
                              onChange={(e) => setNome(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-3">
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              refs="email"
                              className="form-control"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Telefone"
                              value={telefone}
                              onChange={(e) => setTelefone(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Cidade"
                              value={cidade}
                              onChange={(e) => setCidade(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col-sm-4">
                          <select
                            className="form-control show-tick"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                          >
                            <option value="">-- Selecione o Estado --</option>
                            <option value="PB">Paraíba</option>
                            <option value="PE">Pernambuco</option>
                            <option value="BA">Bahia</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="AL">Alagoas</option>
                          </select>
                        </div>

                        <div className="col-sm-4">
                          <select
                            className="form-control show-tick"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                          >
                            <option value="">
                              -- Selecione a Categoria --
                            </option>
                            <option value="Cliente">Cliente</option>
                            <option value="Fornecedor">Fornecedor</option>
                            <option value="Funcionario">Funcionario</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button onClick={handleSubmit}>Cadastrar</button>
                    {cadastroOK ? msgFinal : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
