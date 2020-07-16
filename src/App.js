import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import Header from "./components/header/Header";
import FormContainer from "./components/formContainer/FormContainer";
import CardContainer from "./components/cardContainer/CardContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      ids: 0,
      name: "",
      address: "",
      age: "",
      email: "",
    };
  }

  handleTxtInputChange = (event) => {
    const tName = event.target.name;
    this.setState({
      [tName]: event.target.value,
    });
  };

  isInputValid = (parInput) => {
    const { name, address, age, email } = this.state;
    switch (parInput) {
      case "cards":
        if (this.state.cards.length === 5) {
          alert("Can only contain 5 cards");
          return false;
        }
        return true;
      case "allInputs":
        if (
          name === "" ||
          address === "" ||
          age === "" ||
          age === 0 ||
          email === ""
        ) {
          alert("All field must be filled");
          return false;
        }
        return true;
      case "name":
        if (name.length < 5) {
          alert("Name minimum of 5 characters");
          return false;
        }
        return true;
      case "age":
        if (isNaN(this.state.age) || this.state.age <= 0) {
          alert("Age must be a number and above zero");
          return false;
        }
        return true;
      case "email":
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          alert("Email field must be a valid email");
          return false;
        }
        return true;
    }
  };

  handleSubmitBtnClick = () => {
    if (
      this.isInputValid("cards") &&
      this.isInputValid("allInputs") &&
      this.isInputValid("name") &&
      this.isInputValid("age") &&
      this.isInputValid("email")
    ) {
      const data = {
        id: this.state.ids,
        name: this.state.name,
        address: this.state.address,
        age: this.state.age,
        email: this.state.email,
      };

      this.setState(() => ({
        cards: this.state.cards.concat(data),
        ids: this.state.ids + 1,
      }));
    }
  };

  onRmvBtnClick = (id) => {
    this.state.cards.forEach((card, i) => {
      if (this.state.cards[i].id === id) {
        this.state.cards.splice(i, 1);
      }
    });

    this.setState({
      cards: this.state.cards,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer
          cards={this.state.cards}
          onRmvBtnClick={this.onRmvBtnClick}
        />
        <FormContainer
          onTxtChange={this.handleTxtInputChange}
          onSubmitBtnClick={this.handleSubmitBtnClick}
        />
      </div>
    );
  }
}

export default App;
