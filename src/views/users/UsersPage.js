import React, { Component } from "react";
import { Button, Header, Table, Pagination, Icon } from "semantic-ui-react";
import TableContent from "./TableContent";
import LoadingPage from "../../components/LoadingPage";
import { getUsers } from "../../api/Users";

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      isLoaded: false,
      users: [],
    };
  }

  getUsersData = () => {
    getUsers(this.state.token)
      .then((users) => {
        this.setState({
          ...this.state,
          isLoaded: true,
          users,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount = () => {
    this.getUsersData();
  };

  handleSaveClick = (id, data) => {
    this.state.users.forEach((each, i) => {
      if (each.id === id) {
        this.state.users.splice(i, 1, data);
      }
    });

    this.setState({
      ...this.state,
      users: this.state.users,
    });
  };

  render() {
    const { isLoaded, users } = this.state;
    const showTableContent = users.map((user, i) => {
      return (
        <TableContent
          key={i}
          index={i}
          item={user}
          onSaveClick={this.handleSaveClick}
        />
      );
    });

    const showUsers = (
      <div className="table-container">
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="5" textAlign={"center"}>
                Users Table
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell className="table-no">No.</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{showTableContent}</Table.Body>
        </Table>
      </div>
    );

    if (!isLoaded) {
      return <LoadingPage />;
    } else {
      return showUsers;
    }
  }
}

export default UsersPage;
