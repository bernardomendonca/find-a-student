import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="content">
        <div className="cardProfileItem mb-4 mx-auto">
          <div className="firstinfo">
            <Link to={`/profile/${profile.handle}`}>
              <img src={profile.user.avatar} />
            </Link>

            <div className="profileinfo">
              <h1>{profile.user.name}</h1>
              <p className="bio">{profile.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
