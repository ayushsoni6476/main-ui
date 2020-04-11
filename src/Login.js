import React from "react";
import Button from "@material-ui/core/Button";


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserLogin = this.submituserLogin.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserLogin(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      
      fields["Name"] = "";
      fields["password"] = "";
      
      
      this.setState({ fields: fields });
      alert("logging in...");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["Name"]) {
      formIsValid = false;
      errors["Name"] = "*Please enter your Name.";
    }
    if (typeof fields["Name"] !== "undefined") {
      if (!fields["Name"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["Name"] = "*Please enter your Name";
      }
    }

   //****************************to get from database************************ */
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter correct password.";
      }
    }
//************************************************** */

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      
      <div id="main-registration-container">
        <h1 id="h1">LOGIN FORM</h1>
      
        <div id="register">
          <div id="bolds">
          
          </div>
          <form
            method="post"
            name="Login"
            onSubmit={this.submituserLogin}
          >
            <label>Name</label>
            <input
              type="text"
              name="Name"
              value={this.state.fields.Name}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.Name}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.password}</div>
            

            <Button
              type="submit"
              className="button"
              value="Add"
              variant="contained"
              color="primary"
              onClick={() => {
                console.log("logged in");
              }}
            >
             Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;