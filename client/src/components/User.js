import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class User extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <div className="user">
        <span>{user}</span>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.string.isRequired,
};

export default User;
