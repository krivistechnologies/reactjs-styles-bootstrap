import React from "react";
import Table from "react-bootstrap/Table";

function UserDisplay(props) {
  const { id, firstName, lastName, email } = props.userData;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default UserDisplay;
