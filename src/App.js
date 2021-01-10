import React from "react";
import AboutUS from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/contactUs";
import OurWork from "./pages/ourWork";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUS />
        </Route>

        <Route path="/ourwork">
          <OurWork />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
