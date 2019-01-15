import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 30px;
`;

const LandingWrapper = styled.div`
  background: #f9fbfc;
  height: 100vh;
  width: 100vw;
`;

class Landing extends Component {
  render() {
    return (
      <LandingWrapper className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <Title>Tweety Clone</Title>
            <img
              src="https://i.gifer.com/TjRd.gif"
              alt="..."
              style={{ borderRadius: "50%" }}
            />
            <br />
            <Link
              to="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </LandingWrapper>
    );
  }
}
export default Landing;
