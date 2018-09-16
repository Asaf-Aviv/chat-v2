import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import socket from '../socket/socket';

class ChatInput extends Component {
  state = {
    message: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { nickname, roomName } = this.props;
    const message = this.state.message.trim();

    socket.emit('newRoomMessage', {
      type: 'user',
      nickname,
      roomName,
      body: message,
      timestamp: Date.now(),
    });
    this.setState({ message: '' });
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  onEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <form className="chatinput" onSubmit={this.handleSubmit}>
        <textarea
          onChange={this.handleChange}
          onKeyDown={this.onEnterPress}
          value={this.state.message}
          required
        />
        <button type="submit">Chat</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  nickname: state.nickname,
});

ChatInput.propTypes = {
  roomName: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
)(ChatInput);
