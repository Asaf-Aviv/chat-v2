import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="users__list__item">
    <span>{user}</span>
  </div>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
};

export default User;
