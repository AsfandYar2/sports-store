import React, { useEffect } from "react";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  // useEffect(() => {
  //   M.AutoInit();
  // });
  return (
    <div>
      <Router>
        {/* <HashRouter basename="/"> */}
        <Navbar />
        {/* </HashRouter> */}
        <Home />
      </Router>
    </div>
  );
}

export default App;
