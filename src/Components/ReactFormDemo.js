import React, { Component } from "react";
class ReactFormDemo extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      gender: false
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { fname, lname, email, gender } = this.state;
    console.log({ fname });
    console.log({ lname });
    console.log({ email });
    console.log({ gender });
    //axios.post("/", { fname, lname, email }).then(result => {

    //});
  };

  render() {
    const { fname, lname, email, gender, country } = this.state;
    return (
      <div align="center">
        <div>Registration Form</div>
        <br></br>
        <form onSubmit={this.onSubmit} method="POST">
          <label>
            First Name :
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={this.onChange}
            />
          </label>
          <br></br>
          <label>
            Last Name :
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={this.onChange}
            />
          </label>
          <br></br>
          <label>
            Email :
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </label>
          <br></br>
          <label>
            Gender :
            <input
              name="gender"
              type="checkbox"
              checked={gender}
              onChange={this.onChange}
            />
          </label>
          <br></br>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
export default ReactFormDemo;
