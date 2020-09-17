import React from "react";
import ReactDOM from "react-dom";
// import Helloworld from "./state-drills/Helloworld";
// import Bomb from "./state-drills/Bomb";
// import RouletteGun from "./state-drills/RouletteGun";
// import { BrowserRouter } from "react-router-dom";
// import App from "./paltrows-power-toes/App";
import AppLang from "./lang-context/AppLang";

ReactDOM.render(
  // <BrowserRouter>
  <AppLang />,
  // </BrowserRouter>,
  document.getElementById("root")
);
