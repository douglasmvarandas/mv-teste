import React from "react";
//importando o componente da api para chamadas.
import api from "../../service/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: 0,
      fornecedores: 0,
      funcionarios: 0,
      clientePB: 0,
      clientePE: 0,
      clienteRN: 0,
      clienteBA: 0,
      clienteAL: 0,
      fornecedoresPB: 0,
      fornecedoresPE: 0,
      fornecedoresRN: 0,
      fornecedoresAL: 0,
      fornecedoresBA: 0,
      funcionariosPB: 0,
      funcionariosPE: 0,
      funcionariosRN: 0,
      funcionariosAL: 0,
      funcionariosBA: 0,
    };
  }

  //Carregamento do Dashboard antes de carregar a tela
  //Para assim pegar os dados.
  async componentDidMount() {
    const countClientes = await api.get("/contatos/clientes");
    this.setState({ clientes: countClientes.data });
    //console.log("fora :" + response.data);

    const countFornecedores = await api.get("/contatos/fornecedores");
    this.setState({ fornecedores: countFornecedores.data });
    //console.log("fora :" + response1.data);

    const countFuncionarios = await api.get("/contatos/funcionarios");
    this.setState({ funcionarios: countFuncionarios.data });
    //console.log("fora :" + response1.data);

    const countClientesPB = await api.get("/contatos/clientes/PB");
    this.setState({ clientePB: countClientesPB.data });
    //console.log("fora :" + response.data);

    const countClientesPE = await api.get("/contatos/clientes/PE");
    this.setState({ clientePE: countClientesPE.data });
    //console.log("fora :" + response.data);

    const countClientesRN = await api.get("/contatos/clientes/RN");
    this.setState({ clienteRN: countClientesRN.data });
    //console.log("fora :" + response.data);

    const countClientesBA = await api.get("/contatos/clientes/BA");
    this.setState({ clienteBA: countClientesBA.data });
    //console.log("fora :" + response.data);

    const countClientesAL = await api.get("/contatos/clientes/AL");
    this.setState({ clienteAL: countClientesAL.data });
    //console.log("fora :" + response.data);

    const countFornecedoresPB = await api.get("/contatos/fornecedores/PB");
    this.setState({ fornecedoresPB: countFornecedoresPB.data });
    //console.log("fora :" + response1.data);

    const countFornecedoresPE = await api.get("/contatos/fornecedores/PE");
    this.setState({ fornecedoresPE: countFornecedoresPE.data });
    //console.log("fora :" + response1.data);

    const countFornecedoresRN = await api.get("/contatos/fornecedores/RN");
    this.setState({ fornecedoresRN: countFornecedoresRN.data });
    //console.log("fora :" + response1.data);

    const countFornecedoresBA = await api.get("/contatos/fornecedores/BA");
    this.setState({ fornecedoresBA: countFornecedoresBA.data });
    //console.log("fora :" + response1.data);

    const countFornecedoresAL = await api.get("/contatos/fornecedores/AL");
    this.setState({ fornecedoresAL: countFornecedoresAL.data });
    //console.log("fora :" + response1.data);

    const countFuncionariosPB = await api.get("/contatos/funcionario/PB");
    this.setState({ funcionariosPB: countFuncionariosPB.data });
    //console.log("fora :" + response1.data);

    const countFuncionariosPE = await api.get("/contatos/funcionario/PE");
    this.setState({ funcionariosPE: countFuncionariosPE.data });
    //console.log("fora :" + response1.data);

    const countFuncionariosRN = await api.get("/contatos/funcionario/RN");
    this.setState({ funcionariosRN: countFuncionariosRN.data });
    //console.log("fora :" + response1.data);

    const countFuncionariosBA = await api.get("/contatos/funcionario/BA");
    this.setState({ funcionariosBA: countFuncionariosBA.data });
    //console.log("fora :" + response1.data);

    const countFuncionariosAL = await api.get("/contatos/funcionario/AL");
    this.setState({ funcionariosAL: countFuncionariosAL.data });
    //console.log("fora :" + response1.data);
  }

  render() {
    return (
      <div classNameName="App">
        <body className="theme-red">
          <section className="content" data-component="Main">
            <div className="container-fluid">
              <div className="block-header">
                <h2>DASHBOARD</h2>
              </div>

              <div className="row clearfix">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-pink hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">person</i>
                    </div>
                    <div className="content">
                      <div className="text">Clientes</div>
                      <div className="number">{this.state.clientes}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-cyan hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">group</i>
                    </div>
                    <div className="content">
                      <div className="text">Fornecedores</div>
                      <div className="number">{this.state.fornecedores}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-light-green hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">groups</i>
                    </div>
                    <div className="content">
                      <div className="text">Funcionários</div>
                      <div className="number">{this.state.funcionarios}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card">
                    <div className="body bg-pink">
                      <div className="font-bold m-b--35">
                        CLIENTES POR ESTADO:
                      </div>
                      <ul className="dashboard-stat-list">
                        <li>
                          Paraíba
                          <span className="pull-right">
                            <b>{this.state.clientePB}</b>
                          </span>
                        </li>
                        <li>
                          Pernambuco
                          <span className="pull-right">
                            <b>{this.state.clientePE}</b>
                          </span>
                        </li>
                        <li>
                          Bahia
                          <span className="pull-right">
                            <b>{this.state.clienteBA}</b>
                          </span>
                        </li>
                        <li>
                          Rio Grande do Norte
                          <span className="pull-right">
                            <b>{this.state.clienteRN}</b>
                          </span>
                        </li>
                        <li>
                          Alagoas
                          <span className="pull-right">
                            <b>{this.state.clienteAL}</b>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card">
                    <div className="body bg-cyan">
                      <div className="font-bold m-b--35">
                        FORNECEDORES POR ESTADO:
                      </div>
                      <ul className="dashboard-stat-list">
                        <li>
                          Paraíba
                          <span className="pull-right">
                            <b>{this.state.fornecedoresPB}</b>
                          </span>
                        </li>
                        <li>
                          Pernambuco
                          <span className="pull-right">
                            <b>{this.state.fornecedoresPE}</b>
                          </span>
                        </li>
                        <li>
                          Bahia
                          <span className="pull-right">
                            <b>{this.state.fornecedoresBA}</b>
                          </span>
                        </li>
                        <li>
                          Rio Grande do Norte
                          <span className="pull-right">
                            <b>{this.state.fornecedoresRN}</b>
                          </span>
                        </li>
                        <li>
                          Alagoas
                          <span className="pull-right">
                            <b>{this.state.fornecedoresAL}</b>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card">
                    <div className="body bg-teal">
                      <div className="font-bold m-b--35">
                        FUNCIONÁRIOS POR ESTADO:
                      </div>
                      <ul className="dashboard-stat-list">
                        <li>
                          Paraíba
                          <span className="pull-right">
                            <b>{this.state.funcionariosPB}</b>
                          </span>
                        </li>
                        <li>
                          Pernambuco
                          <span className="pull-right">
                            <b>{this.state.funcionariosPE}</b>
                          </span>
                        </li>
                        <li>
                          Bahia
                          <span className="pull-right">
                            <b>{this.state.funcionariosBA}</b>
                          </span>
                        </li>
                        <li>
                          Rio Grande do Norte
                          <span className="pull-right">
                            <b>{this.state.funcionariosRN}</b>
                          </span>
                        </li>
                        <li>
                          Alagoas
                          <span className="pull-right">
                            <b>{this.state.funcionariosAL}</b>
                          </span>
                        </li>
                      </ul>
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
}

export default App;
