import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { activateTab, updateTabsOnLeave } from '../utils/utils';
import CloseIcon from '../assets/close.svg';
import socket from '../socket/socket';

class RoomTab extends PureComponent {
  componentDidMount = () => {
    setTimeout(() => activateTab(this.props.roomName), 50);
  }

  leaveRoom = (e) => {
    e.stopPropagation();
    const { roomName } = this.props;
    socket.emit('leaveRoom', roomName);
    updateTabsOnLeave(roomName);
  }

  render() {
    const { roomName } = this.props;
    return (
      <div className="room__tab" data-room={roomName}>
        <span className="room__tab__text">{roomName}</span>
        <CloseIcon className="room__tab__icon" onClick={this.leaveRoom} />
        <span className="room__tab__notifications" />
      </div>
    );
  }
}

RoomTab.propTypes = {
  roomName: PropTypes.string.isRequired,
};

export default RoomTab;
