import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MessagePropType } from '../PropTypes/propTypes';
import MessagesList from '../components/MessagesList';

const ChatBox = ({ roomMessages }) => (
  <div className="chat__box">
    {Object.keys(roomMessages).map(roomName => (
      <MessagesList
        key={roomName}
        classes="messages__list"
        messages={roomMessages[roomName]}
        target={roomName}
      />
    ))}
  </div>
);

ChatBox.propTypes = {
  roomMessages: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(MessagePropType),
  }).isRequired,
};

const mapStateToProps = state => ({
  roomMessages: state.roomMessages,
});

export default connect(mapStateToProps)(ChatBox);
