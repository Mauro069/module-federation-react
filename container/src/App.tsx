import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "components/Header";
import Footer from "components2/Footer";
// import Test from "components3/Component";

import { useEffect } from "react";




const App = () => (
  <div style={{ height: "100vh" }} className="flex flex-col">
    <Header />
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-5xl">Soy el contenedor en React ⚛️</h1>
      
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
