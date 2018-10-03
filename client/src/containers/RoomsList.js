import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Room from '../components/Room';

const RoomsList = ({ globalRooms }) => (
  <div className="rooms__list">
    {globalRooms.map(roomName => <Room key={roomName} roomName={roomName} />)}
  </div>
);

RoomsList.propTypes = {
  globalRooms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  globalRooms: state.globalRooms,
});

export default connect(mapStateToProps)(RoomsList);
