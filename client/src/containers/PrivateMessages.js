import React from 'react';
import PropTypes from 'prop-types';
import { MessagePropType } from '../PropTypes/propTypes';
import Message from '../components/Message';
import MessagesList from '../components/MessagesList';


const PrivateMessages = ({ messages = [] }) => (
  <MessagesList classes="privatemessages">
    {messages.map(message => (
      <Message
        key={`${message.nickname}_${message.timestamp}`}
        message={message}
      />
    ))}
  </MessagesList>
);

PrivateMessages.propTypes = {
  messages: PropTypes.arrayOf(MessagePropType).isRequired,
};

export default PrivateMessages;
