import React from "react";

function Section({ id, title, content, handleButtonClick, active }) {
  return (
    <li>
      <button onClick={() => handleButtonClick(id)}>{title}</button>
      {active && <p>{content}</p>}
    </li>
  );
}

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: null };
  }

  handleButtonClick = (id) => {
    this.setState({
      activeSection: id,
    });
  };

  render() {
    return (
      <ul>
        {this.props.sections.map((section, index) => {
          return (
            <Section
              key={index}
              id={section.id}
              title={section.title}
              content={section.title}
              handleButtonClick={this.handleButtonClick}
              active={this.state.activeSection === section.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default Accordian;
