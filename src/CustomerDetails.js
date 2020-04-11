import React from "react";
import Button from "@material-ui/core/Button";


class CustomerDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserCustomerDetails = this.submituserCustomerDetails.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserCustomerDetails(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      
      fields["CustomerName"] = "";
      fields["TotalPrice"] = "";
      fields["Mobileno"] = "";
      fields["CustomerAddress "] = "";
      fields["EstimatedDelivery"] = "";
      fields["CustomerPincode"] = "";
      
      
      this.setState({ fields: fields });
      alert("Your product will deliver soon");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["CustomerName"]) {
      formIsValid = false;
      errors["CustomerName"] = "*Please enter your Customer Name.";
    }
    if (typeof fields["CustomerName"] !== "undefined") {
      if (!fields["CustomerName"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["CustomerName"] = "*Please enter your Customer Name";
      }
    }

   
    if (!fields["Mobileno"]) {
      formIsValid = false;
      errors["Mobileno"] = "*Please enter your Mobile Number";
    }
    if (typeof fields["Mobileno"] !== "undefined") {
      if (!fields["Mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["Mobileno"] = "*Please enter Numerical value for Mobile Number";
      }
    }

    if (!fields["CustomerAddress"]) {
      formIsValid = false;
      errors["CustomerAddress"] = "*Please enter your Address";
    }
    if (typeof fields["CustomerAddress"] !== "undefined") {
      if (!fields["CustomerAddress"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["CustomerAddress"] = "*Required";
      }
    }

  
    if (!fields["CustomerPincode"]) {
      formIsValid = false;
      errors["CustomerPincode"] = "*Please enter your Pincode";
    }

    if (typeof fields["CustomerPincode"] !== "undefined") {
      if (!fields["CustomerPincode"].match(/^[0-9]{6}$/)) {
        formIsValid = false;
        errors["CustomerPincode"] = "*Please enter a valid pincode";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      
      <div id="main-registration-container">
        <h1 id="h1">CUSTOMER DETAILS</h1>
      
        <div id="register">
          <div id="bolds">
            
            
            
          </div>
          <form
            method="post"
            name="CustomerDetails"
            onSubmit={this.submituserCustomerDetails}
          >
            <label>Customer Name</label>
            <input
              type="text"
              name="CustomerName"
              value={this.state.fields.CustomerName}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.CustomerName}</div>

            <label>Customer Address</label>
            <input
              type="text"
              name="CustomerAddress"
              value={this.state.fields.CustomerAddress}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.CustomerAddress}</div>

            <label>Mobile Number</label>
            <input
              type="text"
              name="Mobileno"
              value={this.state.fields.Mobileno}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.Mobileno}</div>

            <label>Pincode</label>
            <input
              type="text"
              name="CustomerPincode"
              value={this.state.fields.CustomerPincode}
              onChange={this.handleChange}
            />
            <div className="errorMsg">
              {this.state.errors.CustomerPincode}
            </div>

            <label>Delivery Date......</label>
            
            <label>Total Price........</label>
            
            <label>Quantity of Products........</label>
            
            

            <Button
              type="submit"
              className="button"
              value="Add"
              variant="contained"
              color="primary"
            >
             BUY
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CustomerDetails;