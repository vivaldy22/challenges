import React, { Component } from "react";
import InputText from "../../components/InputText";
import "./loginPage.css";
import {
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { getAuth } from "../../api/Auth";

const regexEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false,
      isEmailValid: true,
      isPasswordValid: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (!this.state.email) {
      this.setState({
        isEmailValid: true,
      });
    }
    if (!this.state.password) {
      this.setState({
        isPasswordValid: true,
      });
    }
  };

  handleCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  isEmailValid = () => {
    // const { email } = this.state;
    // return email.match(regexEmail);
    return true;
  };

  handleSubmitBtn = () => {
    if (!this.state.email && !this.state.password) {
      this.setState({
        isEmailValid: false,
        isPasswordValid: false,
      });
    } else if (!this.isEmailValid() && !this.state.password) {
      this.setState({
        isEmailValid: false,
        isPasswordValid: false,
      });
    } else if (this.isEmailValid() && !this.state.password) {
      this.setState({
        isEmailValid: true,
        isPasswordValid: false,
      });
    } else if (this.isEmailValid() && this.state.password) {
      if (this.state.email === "root" && this.state.password === "root") {
        this.setState({
          isEmailValid: true,
          isPasswordValid: true,
        });
        alert("Login success");
        this.props.onLogin();
        const auth = {
          username: this.state.email,
          password: this.state.password,
        };
        getAuth(auth).then((res) => {
          // console.log(res.data.token);
          sessionStorage.setItem("token", res.data.token);
        });
      } else {
        alert("Invalid login, please try again");
        this.setState({
          email: "",
          password: "",
        });
      }
    } else {
      this.setState({
        isEmailValid: false,
        isPasswordValid: false,
      });
    }
    // console.log(this.state.email);
    // console.log(this.state.password);
  };

  handleKeyUp = (e) => {
    if (e.charCode === 13) {
      this.handleSubmitBtn();
    }
  };

  render() {
    const { remember, isEmailValid, isPasswordValid } = this.state;
    return (
      <div className="background-image">
        <div className="form-container">
          <div className="empty-container" />
          <div className="lock-icon" />
          <Typography
            component="h1"
            variant="h5"
            style={{ alignSelf: "center", marginBottom: "30px" }}
          >
            Sign in
          </Typography>
          <FormControl>
            <label>Email address or Username</label>
            <InputText
              onTextChange={this.handleChange}
              onKeyPress={this.handleKeyUp}
              value={this.state.email}
              placeholder="Your email or username"
              type="text"
              name="email"
              valid={isEmailValid}
            />
          </FormControl>
          <FormControl>
            <label style={{ marginTop: "10px" }}>Password</label>
            <InputText
              onTextChange={this.handleChange}
              onKeyPress={this.handleKeyUp}
              value={this.state.password}
              placeholder="Your password"
              type="password"
              name="password"
              valid={isPasswordValid}
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                color="primary"
                name="remember"
                onChange={this.handleCheckbox}
              />
            }
            label="Remember me"
          />
          <Button
            onClick={this.handleSubmitBtn}
            color="primary"
            variant="contained"
            disableElevation
            className="button-submit"
            style={{ marginTop: "6px" }}
          >
            Sign in
          </Button>
          <div className="sign-in-link-container">
            <Link href="#" variant="body2">
              {"Forgot your password?"}
            </Link>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign up here!"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
