import React, { Component } from 'react';
import { Grid, Paper, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";


class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      mobileNumber: "",
      DOB: "",
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

  //validateNumber(mobileNumber) {
  //const ree = /^\(([0-9]{3})\)[ ]?([0-9]{3})[-]?([0-9]{4})$/;
  //return ree.test(mobileNumber);
  //}


  validate() {
    const { fullName, email, password, mobileNumber, DOB } = this.state;
    const errors = {}


    if (!fullName) {
      errors.fullName = "Name cannot be blank";
    }

    if (!(email)) {
      errors.email = "Email cannot be blank";
    } else if (!this.validateEmail(email)) {
      errors.email = "Enter valid email";
    }

    if (!password) {
      errors.password = "Enter password";
    }
    if (!(mobileNumber)) {
      errors.mobileNumber = "Enter valid number";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {

      window.location.href = ("/Login")
    }

    return errors;
  }
  render() {
    const { fullName, email, password, mobileNumber, DOB, errors } = this.state;
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
            <h2>Register here</h2>
          </Grid>

          <TextField
            error={errors.fullName}
            label="Full name"
            placeholder="Enter name"
            fullwidth
            value={fullName}
            onChange={(e) => this.setState({ fullName: e.target.value })}
            required
            helperText={errors.fullName}
          />

          <TextField
            error={errors.mobileNumber}
            type='number'
            label="Mobile number"
            placeholder="Enter mobile number"
            fullwidth
            // eslint-disable-next-line no-undef
            value={mobileNumber}
            onChange={(e) => this.setState({ mobileNumber: e.target.value })}
            required
            helperText={errors.mobileNumber}
          />

          <TextField
            id="date"
            label="DOB"
            type="date"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            required
          />

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


          <Button variant="contained" color="primary" onClick={this.validate}>
            Register here
          </Button>
        </Paper>
      </Grid>
    );
  }
}
export default Registration;