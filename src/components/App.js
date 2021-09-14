import React from "react";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/services" render={() => <h1>Services</h1>} />
          <Route path="/reiki" render={() => <h1>Services</h1>} />
          <Route path="/reflexology" render={() => <h1>reflexology</h1>} />
          <Route path="/tarot" render={() => <h1>tarot</h1>} />
          <Route path="/counselling" render={() => <h1>counselling</h1>} />
          <Route path="/pricing" render={() => <h1>Pricing</h1>} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route path="/contact" render={() => <h1>contact</h1>} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route path="/freesession" render={() => <h1>free session</h1>} />
          <Route path="/not-found" render={() => <h1>not found</h1>} />
          <Redirect from="/home" to="/" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
