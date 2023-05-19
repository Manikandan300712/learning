import React, { Component } from "react";
import "./login.scss";

class LoginClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        password: "",
      },
      formError: {
        name: null,
        password: null,
      },
    };
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    const { form, formError } = this.state;

    let obj = {
      ...form,
      [name]: value,
    };
    let errObj = {
      ...formError,
      [name]: this.validateField(name, value),
    };

    this.setState({
      form: obj,
      formError: errObj,
    });
  };

  validateField = (name, value) => {
    let errMsg = "";

    switch (name) {
      case "name":
        if (!value) errMsg = "Enter User Name";
        else errMsg = "";
        break;
      case "password":
        if (!value) errMsg = "Enter Password";
        else errMsg = "";
        break;
      default:
        break;
    }

    return errMsg;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { form, formError } = this.state;

    let errObj = {};
    Object.keys(form).forEach((name) => {
      const error = this.validateField(name, form[name]);
      if (error) {
        errObj[name] = error;
      }
    });

    if (Object.keys(errObj).length > 0) {
      this.setState({ formError: errObj });
      return;
    }
    console.log(form);
  };

  render() {
    const { form, formError } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-4">
          <div className="card">
            <br />
            <h3 align="center">Login Class Component</h3>
            <br />
            <form>
              <div className="mb-3">
                <label htmlFor="">User Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter User Name"
                  value={form?.name}
                  onChange={this.handleOnchange}
                  onBlur={this.handleOnchange}
                  name="name"
                  required
                />
                {formError.name && <span>{formError.name}</span>}
              </div>
              <div className="mb-5">
                <label htmlFor="">Password:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Password"
                  value={form?.password}
                  onChange={this.handleOnchange}
                  onBlur={this.handleOnchange}
                  name="password"
                  required
                />
                {formError.password && <span>{formError.password}</span>}
              </div>
              <div className="mb-5">
                <button
                  className="btn btn-secondary"
                  onClick={this.handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginClassComponent;
