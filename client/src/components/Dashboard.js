import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authActions";
import Navigation from "../../../Container/Navigation/Navigation";
import Main from "../../../Container/Main/Main";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const name = user.name.split(" ")[0];
    return (
      <React.Fragment>
        <Navigation onLogoutClick={this.onLogoutClick} name={name} />
        <Main />
      </React.Fragment>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
