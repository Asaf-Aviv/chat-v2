import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class User extends PureComponent {
  render() {
    const { nickname } = this.props;
    return (
      <div className="users__list__item">
        <span>{nickname}</span>
      </div>
    );
  }
}

User.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default User;
