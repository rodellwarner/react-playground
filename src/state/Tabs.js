import React from "react";
import { render } from "@testing-library/react";

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  constructor(props) {
    super(props);
    this.state = { currentTabIndex: 0 };
  }

  handleButtonClick = () => {
    console.log("button clicked!");
  };

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={this.handleButtonClick}>
        {tab.name}
      </button>
    ));
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex];
    return <div className="content">{currentTab.content}</div>;
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    );
  }

  // render() {
  //   const buttons = this.props.tabs.map((tab, index) => (
  //     <button key={index}>{tab.name}</button>
  //   ));

  //   const currentTab = this.props.tabs[0];

  //   return (
  //     <div>
  //       {buttons}
  //       {/* only show content when the tabs array has length */}
  //       {this.props.tabs.length && (
  //         <div className="content">{currentTab.content}</div>
  //       )}
  //     </div>
  //   );
  // }
}

export default Tabs;
