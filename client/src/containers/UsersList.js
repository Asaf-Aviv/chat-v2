import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from '../components/User';

class UsersList extends PureComponent {
  render() {
    const { usersList } = this.props;
    return (
      <div className="userslist">
        {usersList.map(user => <User key={user} user={user} />)}
      </div>
    );
  }
}

UsersList.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UsersList;
