import React, { Component } from "react";
import SubmitBtnContainer from "./SubmitBtnContainer";
import ClearBtnContainer from "./ClearBtnContainer";

class Hoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      favFood: "",
      component: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitBtn = () => {
    // console.log("UNAME", this.state.username);
    // console.log("FAV", this.state.favFood);
    this.setState({
      ...this.state,
      component: (
        <SubmitBtnContainer
          key={new Date()}
          username={this.state.username}
          favFood={this.state.favFood}
        />
      ),
    });
  };

  handleClearBtn = () => {
    this.setState({
      ...this.state,
      component: (
        <ClearBtnContainer
          key={new Date()}
          username={this.state.username}
          favFood={this.state.favFood}
        />
      ),
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="favFood"
          value={this.state.favFood}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmitBtn}>Submit</button>
        <button onClick={this.handleClearBtn}>Clear</button>
        {this.state.component}
      </div>
    );
  }
}

export default Hoc;
