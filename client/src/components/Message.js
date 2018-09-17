import React from 'react';
import { MessagePropType } from '../PropTypes/propTypes';

const Message = ({ message }) => (
  <div className="messages__list__item" style={{ color: message.type === 'admin' ? 'green' : 'red' }}>
    <span>{message.timestamp}</span>
    <span>{message.nickname}</span>
    <span>{message.body}</span>
  </div>
);

Message.propTypes = {
  message: MessagePropType.isRequired,
};

export default Message;
