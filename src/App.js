import React from "react";
//Pages and components
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {Route} from "react-router-dom";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
       <Home />
      </Route>
    </div>
  );
}

export default App;
