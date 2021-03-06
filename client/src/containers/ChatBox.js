import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MessagePropType, UserPropType } from '../PropTypes/propTypes';
import MessagesList from '../components/MessagesList';
import createDropbox from '../utils/createDropbox';

class ChatBox extends Component {
  componentDidMount = () => {
    const chatBox = document.querySelector('.chat__box');
    createDropbox(chatBox);
  }

  render() {
    const { roomMessages, usersList } = this.props;
    return (
      <div className="chat__box">
        {Object.keys(roomMessages).map(roomName => (
          <MessagesList
            key={roomName}
            messages={roomMessages[roomName]}
            target={roomName}
            users={usersList[roomName]}
          />
        ))}
      </div>
    );
  }
}

ChatBox.propTypes = {
  roomMessages: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(MessagePropType),
  }).isRequired,
  usersList: PropTypes.shape({ [PropTypes.string]: PropTypes.arrayOf(UserPropType) }).isRequired,
};

const mapStateToProps = state => ({
  roomMessages: state.roomMessages,
  usersList: state.usersList,
});

export default connect(mapStateToProps)(ChatBox);
