import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import socket from '../socket/socket';

class RoomTab extends PureComponent {
  leaveRoom = (e) => {
    e.stopPropagation();
    socket.emit('leaveRoom', this.props.roomName);
  }

  render() {
    const { roomName } = this.props;
    return (
      <div className="roomtab" data-target={roomName}>
        <span className="roomtab__text">{roomName}</span>
        <Button
          classes="roomtab__btn leave"
          onClick={this.leaveRoom}
          text="Leave"
        />
      </div>
    );
  }
}

RoomTab.propTypes = {
  roomName: PropTypes.string.isRequired,
};

export default RoomTab;
