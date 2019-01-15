import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../store/action/authAction";

import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <RegisterStyle>
        <div>
          <Link to="/">
            <i>keyboard_backspace</i> Back to home
          </Link>
          <div>
            <h4>
              <b>Register</b> below
            </h4>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit} className="register_form">
            <div>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
                placeholder="Email"
              />
              <span>{errors.email}</span>
            </div>
            <div>
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                  invalid: errors.name
                })}
                placeholder="Full Name"
              />
              <span>{errors.name}</span>
            </div>
            <div>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
                placeholder="Password"
              />
              <span>{errors.password}</span>
            </div>
            <div>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2
                })}
                placeholder="Password2"
              />
              <span>{errors.password2}</span>
            </div>
            <div>
              <button type="submit">Sign up</button>
              <p>
                By signing up, you agree to our Terms, Data Policy and Cookies
                Policy.
              </p>
            </div>
          </form>
        </div>
      </RegisterStyle>
    );
  }
}

const RegisterStyle = styled.div`
  border: 1px solid red;
  max-width: 280px;
  margin: 0 auto;

  .register_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 100;
    flex: 1;
    font-size: 2rem;
    margin: 0 10px;
    min-width: 0;
    width: 87%;
    flex: 1;
  }
`;

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
