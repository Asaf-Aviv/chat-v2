import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { activateTab } from '../utils/utils';
import socket from '../socket/socket';

class RoomTab extends Component {
  componentDidMount = () => {
    setTimeout(() => activateTab(this.props.roomName), 80);
  }

  leaveRoom = (e) => {
    e.stopPropagation();
    socket.emit('leaveRoom', this.props.roomName);
  }

  render() {
    const { roomName } = this.props;
    return (
      <div className="room__tab" data-room={roomName}>
        <span className="roomtab__text">{roomName}</span>
        <Button
          classes="room__tab__btn"
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
