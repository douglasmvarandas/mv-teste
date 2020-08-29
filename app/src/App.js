import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  render() {
    return (
      <div class="App">
        <body className="theme-red">
          <div className="page-loader-wrapper">
            <div className="loader">
              <div className="preloader">
                <div className="spinner-layer pl-red">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
              <p>Please wait...</p>
            </div>
          </div>

          <div className="overlay"></div>

          <nav className="navbar" data-component="TopBar">
            <div className="container-fluid">
              <div className="navbar-header">
                <a
                  href="javascript:void(0);"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar-collapse"
                  aria-expanded="false"
                ></a>
                <a href="javascript:void(0);" className="bars"></a>
                <a className="navbar-brand" href="index.html">
                  MENEW Agenda
                </a>
              </div>
            </div>
          </nav>

          <section>
            <aside
              id="leftsidebar"
              className="sidebar"
              data-component="SideBar"
            >
              <div className="user-info">
                <div className="image">
                  <img
                    src="images/user.png"
                    width="48"
                    height="48"
                    alt="User"
                  />
                </div>
                <div className="info-container">
                  <div
                    className="name"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Rodrigo Córdula
                  </div>
                  <div className="email">rodrigo@example.menew.com</div>
                </div>
              </div>

              <div className="menu" data-component="Menu">
                <ul className="list">
                  <li className="header">Menu Navegação</li>
                  <li className="active">
                    <Link to="/">
                      <i className="material-icons">home</i>
                      <span>Inicial</span>
                    </Link>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="menu-toggle">
                      <i className="material-icons">book</i>
                      <span>Agenda</span>
                    </a>
                    <ul className="ml-menu">
                      <li>
                        <Link to="/MostrarContato">Mostrar Contatos</Link>
                      </li>
                      <li>
                        <Link to="/NovoContato">Adicionar Novo Contato</Link>
                      </li>
                      <li>
                        <Link to="/EditarContato">Editar Contato</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="legal" data-component="Footer">
                <div className="copyright">
                  <p>Rodrigo Córdula</p>
                  &copy; 2020
                </div>
              </div>
            </aside>
          </section>
          {this.props.children}
        </body>
      </div>
    );
  }
}

export default App;
