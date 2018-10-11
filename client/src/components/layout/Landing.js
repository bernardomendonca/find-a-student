import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row vertical-center col-md-9 mx-auto">
              <div className="col-md-12 text-center">
                <h1 className="display-1 mb-1">
                  Founder
                  <br />& Student
                </h1>
                <p className="lead">
                  {" "}
                  Helping startup founders and international students find each
                  other
                </p>
                <hr />
              </div>
              <div className="col-md-8 mx-auto">
                <Link
                  to="/register"
                  className="mb-4 btn-block"
                  id="landing-button-signup"
                >
                  Sign Up
                </Link>
                <br />
                <Link
                  to="/login"
                  className="btn-block"
                  id="landing-button-login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isReqquired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
