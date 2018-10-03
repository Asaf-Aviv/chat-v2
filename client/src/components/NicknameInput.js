import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNickname } from '../actions';
import socket from '../socket/socket';

class NicknameInput extends Component {
  state = {
    nickname: '',
    isTaken: false,
  }

  handleChange = (e) => {
    this.setState({ nickname: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const nickname = this.state.nickname.trim();

    socket.emit('setNickname', nickname, (isTaken) => {
      if (isTaken) {
        this.setState({ isTaken: true });
        return;
      }
      this.props.setNickname(nickname);
    });
  }

  render() {
    const { nickname, isTaken } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="nickname"
          onChange={this.handleChange}
          value={nickname}
          type="text"
          placeholder="Choose a nickname"
          maxLength={16}
          required
        />
        <button type="submit">Join</button>
        {
          isTaken && <span>Nickname is taken.</span>
        }
      </form>
    );
  }
}

NicknameInput.propTypes = {
  setNickname: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setNickname,
};

export default connect(
  null,
  mapDispatchToProps,
)(NicknameInput);
