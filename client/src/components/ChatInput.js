import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import socket from '../socket/socket';

class ChatInput extends Component {
  state = {
    message: '',
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  onEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      document.querySelector('.chat__input__btn').click();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { nickname } = this.props;
    const message = this.state.message.trim();
    const roomName = e.target.getAttribute('data-room');

    socket.emit('newRoomMessage', {
      type: 'user',
      nickname,
      roomName,
      body: message,
      timestamp: Date.now(),
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <form
        className="chat__input__container"
        onSubmit={this.handleSubmit}
      >
        <textarea
          className="chat__input__textarea"
          onChange={this.handleChange}
          onKeyDown={this.onEnterPress}
          value={this.state.message}
          required
        />
        <button
          className="chat__input__btn"
          type="submit"
        >
          Chat
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  nickname: state.nickname,
});

ChatInput.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ChatInput);
