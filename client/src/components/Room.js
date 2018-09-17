import React, { Component } from 'react';
import PropTypes from 'prop-types';
import socket from '../socket/socket';

class Room extends Component {
  handleClick = () => {
    socket.emit('joinRoom', this.props.roomName);
  };

  render() {
    return (
      <button
        className="rooms__list__btn"
        type="button"
        onClick={this.handleClick}
      >
        {this.props.roomName}
      </button>
    );
  }
}

Room.propTypes = {
  roomName: PropTypes.string.isRequired,
};

export default Room;
