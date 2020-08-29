import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//importação dos componentes
import Dashboard from "./components/Dashboard/App";
import Form from "./components/Form/App";
import Table from "./components/Table/App";
import FormEdit from "./components/FormEdit/App";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/NovoContato" component={Form} />
        <Route path="/MostrarContato" component={Table} />
        <Route path="/EditarContato" component={FormEdit} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
