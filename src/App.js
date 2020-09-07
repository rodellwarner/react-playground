import React from "react";
import Split from "./composition/Split";
import "./App.css";
import Tooltip from "./composition/Tooltip";
import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import Tabs from "./state/Tabs";
import Accordian from "./state-drills/Accordian";
import DemonymApp from "./demonymapp/demonymApp";

const firstTooltip = (
  <Tooltip message="tooltip message" color="#000ea0">
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip message="another tooltip message" color="yellow">
    oficiis
  </Tooltip>
);

const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
  },
];

const sections = [
  {
    title: "Section 1",
    content: "111 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: "section_1_ID",
  },
  {
    title: "Section 2",
    content:
      "222 Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
    id: "section_2_ID",
  },
  {
    title: "Section 3",
    content:
      "333 Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
    id: "section_3_ID",
  },
];

function App() {
  return (
    <main className="App">
      {/* <Split className="left" flexBasis={2}>
        This is the content for the left `Split`. Lorem ipsum {firstTooltip}{" "}
        dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit
        facere officia?
        <br />
        <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis officiis quam {secondTooltip} fuga.
        Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
      <TheDate />
      <Counter count={123} /> */}
      {/* <Tabs tabs={tabsProp} /> */}
      {/* <Accordian sections={sections} /> */}
      <DemonymApp />
    </main>
  );
}

export default App;
