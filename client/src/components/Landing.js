import React from "react";
import { Link } from "react-router-dom";

const Landing = props => (
  <div>
    <div>
      <br />
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  </div>
);

export default Landing;
