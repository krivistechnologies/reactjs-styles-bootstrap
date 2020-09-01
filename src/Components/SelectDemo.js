import React, { Component } from "react";
class SelectDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "india"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("You have slect the country is : " + this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose you Country :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="india">India</option>
            <option value="canada">Canada</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SelectDemo;
