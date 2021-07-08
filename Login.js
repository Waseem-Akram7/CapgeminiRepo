import React, { Component } from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.validate = this.validate.bind(this);
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  validate() {
    const { email, password } = this.state;
    const errors = {};

    //TODO: Add the validation for email and password

    if (!(email)) {
      errors.email = "Email cannot be blank";
    } else if (!this.validateEmail(email)) {
      errors.email = "Enter valid email"
    }

    if (password.length < 5) {
      errors.password = "Provide min 5-digit password";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      window.location.href = ("/Welcome")
    }

    return errors;
  }


  render() {
    const { email, password, errors } = this.state;
    const paperStyle = {
      padding: 20,
      height: "70vh",
      width: 280,
      margin: "20px auto",
    };

    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Login</h2>
          </Grid>

          <TextField
            error={errors.email}
            label="Email"
            placeholder="Enter mail"
            fullwidth
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            required
            helperText={errors.email}
          />

          <TextField
            error={errors.password}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullwidth
            required
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            helperText={errors.password}
          />

          <div style={{ fontSize: "12", color: "red" }} />

          <Button variant="contained" color="primary" onClick={this.validate}>
            Login
          </Button>

        </Paper>
      </Grid>
    );

  }
}
export default Login;