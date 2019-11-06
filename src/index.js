import React from "react";
import ApolloClient from "apollo-boost";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { AppBar, Typography } from "@material-ui/core";
import "./styles/index.scss";
import ErrorBoundary from "./components/error-boundary";
import ContinentsList from "./components/continents-list";
import Continent from "./components/continent";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <AppBar position="static" color="primary">
          <Typography variant="h6" color="inherit" className="header">
            <Link to="/">Continents</Link>
          </Typography>
        </AppBar>
        <Route path="/" exact component={ContinentsList} />
        <Route path="/continent/:code" exact component={Continent} />
      </ErrorBoundary>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
