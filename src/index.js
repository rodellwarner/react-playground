import React from "react";
import ReactDOM from "react-dom";
// import Helloworld from "./state-drills/Helloworld";
// import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";

ReactDOM.render(
  <RouletteGun bulletInChamber={8} />,
  document.getElementById("root")
);
