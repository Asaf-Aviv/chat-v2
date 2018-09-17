import React, { Component } from 'react';
import socket from '../socket/socket';

class OpenRoom extends Component {
  state = {
    roomName: '',
    reason: '',
  }

  handleChange = (e) => {
    this.setState({
      roomName: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const roomName = this.state.roomName.trim();

    if (!roomName) {
      this.setState({ reason: 'Please enter a room name' });
      return;
    }

    socket.emit('openRoom', roomName, (isAvailable, newRoomName) => {
      if (isAvailable) {
        socket.emit('joinRoom', newRoomName);
        this.setState({ roomName: '', reason: '' });
        return;
      }
      this.setState({ reason: 'Room is already taken' });
    });
  }

  render() {
    const { reason, roomName } = this.state;
    return (
      <form className="open__room" onSubmit={this.handleSubmit}>
        <input
          className="open__room__input"
          onChange={this.handleChange}
          value={roomName}
          type="text"
          placeholder="Room name"
          maxLength={16}
        />
        { reason && <div><span>{reason}</span></div> }
        <button
          className="open__room__btn"
          type="submit"
        >
          Open room
        </button>
      </form>
    );
  }
}

export default OpenRoom;
