import React, { Component } from "react";
import "./countrySelector.css";

class CountrySelector extends Component {
  changeSelection(value) {
    if (value === "None") {
      this.props.changeHandler(null);
    } else {
      //find the country selected
      const country = this.props.countries.find(
        (country) => country.name === value
      );
      this.props.changeHandler(country);
    }
  }

  render() {
    const options = this.props.countries.map((country, index) => (
      <option value={country.name} key={index}>
        {country.name}
      </option>
    ));

    return (
      <div className="countrySelector">
        <form>
          <label htmlFor="country">Select a country</label>
          <select
            id="country"
            name="country"
            onChange={(e) => this.changeSelection(e.target.value)}
          >
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

export default CountrySelector;
