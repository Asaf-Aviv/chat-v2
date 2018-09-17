import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../components/User';

const UsersList = ({ usersList }) => (
  <div className="users__list__container">
    {Object.keys(usersList).map(roomName => (
      <div className="users__list" data-room={roomName} key={roomName}>
        {usersList[roomName].map(user => <User key={user} user={user} />)}
      </div>
    ))}
  </div>
);

UsersList.propTypes = {
  usersList: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapStateToProps = state => ({
  usersList: state.usersList,
});

export default connect(mapStateToProps)(UsersList);
