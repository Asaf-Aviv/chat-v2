import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import socket from '../socket/socket';

class Room extends PureComponent {
  handleClick = () => {
    const { roomName } = this.props;
    const currentRooms = [...document.querySelectorAll('.room__tab')];
    if (currentRooms.some(room => room.getAttribute('data-room') === roomName)) return;
    socket.emit('joinRoom', roomName);
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
