import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Search } from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
