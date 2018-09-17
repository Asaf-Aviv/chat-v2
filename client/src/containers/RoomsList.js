import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Room from '../components/Room';

const RoomsList = ({ roomsList }) => (
  <div className="rooms__list">
    {roomsList.map(roomName => <Room key={roomName} roomName={roomName} />)}
  </div>
);

RoomsList.propTypes = {
  roomsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  roomsList: state.roomsList,
});

export default connect(mapStateToProps)(RoomsList);
