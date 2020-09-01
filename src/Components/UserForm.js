import React, { Component } from "react";
import UserDisplay from "./UserDisplay";
import axios from "axios";
class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      gender: false,
      success: false,
      user: []
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { fname, lname, email, gender } = this.state;
    const user = {
      firstName: fname,
      lastName: lname,
      email: email
    };
    //POST request using axios with error handling
    axios
      .post("http://localhost:8080/users", user)
      //.then(response => this.setState({ userId: response.user.id }))
      //.then(response => this.setState({ success: true }))
      .then(response => this.setState({ user: response.data, success: true }))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };

  render() {
    const { fname, lname, email, gender, country, user } = this.state;
    const successmessage = "Successfully registered";
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
        <br></br>
        <div> {this.state.success ? "Successfully registered" : ""}</div>
        <div>{this.state.success ? <UserDisplay userData={user} /> : ""}</div>
      </div>
    );
  }
}
export default UserForm;
