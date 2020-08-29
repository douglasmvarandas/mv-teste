import React, { useState } from "react";
//importando o componente da api para chamadas.
import api from "../../service/api";

function App() {
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");

  const [estado, setEstado] = useState("");
  const [categoria, setCategoria] = useState("");

  const [cadastroOK, setCadastroOK] = useState(false);
  const [retornoOK, setRetornoOK] = useState(false);

  //Submit para edição do contato atraves do id
  async function handleSubmit() {
    const data = {
      ID: id,
      NOME: nome,
      EMAIL: email,
      TELEFONE: telefone,
      CIDADE: cidade,
      ESTADO: estado,
      CATEGORIA: categoria,
    };
    //console.log(data);
    await api.put("/contato/" + id, data);
    //console.log(response);

    setCadastroOK(true);
  }

  //pegar dados do cadastro para edição atraves do id
  async function pegarDados() {
    //console.log(data);
    const response = await api.get("/contato/" + id);
    console.log(response.data[0]);
    setNome(response.data[0].NOME);
    setEmail(response.data[0].EMAIL);
    setTelefone(response.data[0].TELEFONE);
    setCidade(response.data[0].CIDADE);

    setRetornoOK(true);
  }

  let msgFinal;
  if (cadastroOK === true) {
    msgFinal = <p>Contato editado com sucesso!</p>;
  }

  let Form;
  if (retornoOK === true) {
    Form = (
      <>
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
                <option value="">-- Selecione a Categoria --</option>
                <option value="Cliente">Cliente</option>
                <option value="Fornecedor">Fornecedor</option>
                <option value="Funcionario">Funcionario</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div classNameName="App">
      <body className="theme-red">
        <section className="content">
          <div className="container-fluid">
            <div className="block-header">
              <h1>Editar Contato</h1>
              <small>
                Digite o ID do contato a ser editado e altere os dados
              </small>
            </div>
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>Formulário:</h2>
                  </div>
                  <div className="body">
                    <div className="row clearfix">
                      <div className="col-sm-1">
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="id"
                              onBlur={pegarDados}
                              value={id}
                              onChange={(e) => setId(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {Form}

                    <button onClick={handleSubmit}>Atualizar</button>
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
