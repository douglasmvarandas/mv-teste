import React from "react";
import api from "../../service/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
    };
  }

  //Carregamento do Dashboard antes de carregar a tela
  //Para assim pegar os dados.
  async componentDidMount() {
    const contatos = await api.get("/contatos/");
    this.setState({ dados: contatos.data });
    console.log(this.state.dados);
  }
  render() {
    return (
      <div classNameName="App">
        <body className="theme-red">
          <section className="content">
            <div className="container-fluid">
              <div className="block-header">
                <h1>Mostrar Contatos</h1>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="card">
                    <div className="header">
                      <h2>Contatos</h2>
                      <ul className="header-dropdown m-r--5"></ul>
                    </div>
                    <div class="body">
                      <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Nome</th>
                              <th>Telefone</th>
                              <th>Email</th>
                              <th>Cidade</th>
                              <th>Estado</th>
                              <th>Categoria</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.dados.map((item) => (
                              // Sem a `key`, React irá disparar um aviso
                              <React.Fragment key={item.id}>
                                <tr>
                                  <th>{item.ID}</th>
                                  <th>{item.NOME}</th>
                                  <th>{item.TELEFONE}</th>
                                  <th>{item.EMAIL}</th>
                                  <th>{item.CIDADE}</th>
                                  <th>{item.ESTADO}</th>
                                  <th>{item.CATEGORIA}</th>
                                </tr>
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
