import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../components/User';
import { UserPropType } from '../PropTypes/propTypes';

const UsersList = ({ usersList }) => (
  <div className="users__list__container">
    {Object.keys(usersList).map(roomName => (
      <div className="users__list" data-room={roomName} key={roomName}>
        {Object.values(usersList[roomName]).map(user => (
          <User key={user.nickname} user={user} />
        ))}
      </div>
    ))}
  </div>
);

UsersList.propTypes = {
  usersList: PropTypes.shape({
    [PropTypes.string]: PropTypes.objectOf({ UserPropType }),
  }).isRequired,
};

const mapStateToProps = state => ({
  usersList: state.usersList,
});

export default connect(mapStateToProps)(UsersList);
