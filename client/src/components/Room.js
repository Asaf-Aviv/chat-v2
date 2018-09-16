import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import socket from '../socket/socket';

class Room extends PureComponent {
  handleClick = (e) => {
    const roomName = e.target.innerHTML;
    socket.emit('joinRoom', roomName);
  };

  render() {
    const { room } = this.props;
    return (
      <div className="room">
        <button
          type="button"
          onClick={this.handleClick}
        >
          {room}
        </button>
      </div>
    );
  }
}

Room.propTypes = {
  room: PropTypes.string.isRequired,
};

export default Room;
