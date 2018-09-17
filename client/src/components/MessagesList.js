import React from 'react';
import PropTypes from 'prop-types';
import { MessagePropType } from '../PropTypes/propTypes';
import Message from './Message';

const MessagesList = ({ messages, classes, target }) => (
  <div className={classes} data-room={target}>
    {messages.map(message => (
      <Message
        key={`${message.nickname}_${message.timestamp}`}
        message={message}
      />
    ))}
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(MessagePropType).isRequired,
  classes: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default MessagesList;
