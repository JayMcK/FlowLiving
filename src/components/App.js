import React, { useState } from "react";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "./Home";
import Services from "./Services";
import Reiki from "./Reiki";
import Reflexology from "./Reflexology";
import Tarot from "./Tarot";
import Counselling from "./Counselling";
import About from "./About";
import Pricing from "./Pricing";
import Contact from "./Contact";
import FreeSession from "./FreeSession";

import "../App.css";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/reiki"
            render={(props) => (
              <Reiki
                {...props}
                value={value}
                selectedIndex={selectedIndex}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/reflexology"
            render={(props) => (
              <Reflexology
                {...props}
                value={value}
                selectedIndex={selectedIndex}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/tarot"
            render={(props) => (
              <Tarot
                {...props}
                value={value}
                selectedIndex={selectedIndex}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/counselling"
            render={(props) => (
              <Counselling
                {...props}
                value={value}
                selectedIndex={selectedIndex}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/pricing"
            render={(props) => (
              <Pricing
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/freeSession"
            render={(props) => (
              <FreeSession
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route path="/not-found" render={() => <h1>not found</h1>} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
