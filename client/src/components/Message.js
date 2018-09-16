import React, { PureComponent } from 'react';
import { MessagePropType } from '../PropTypes/propTypes';

class Message extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <div className="message" style={{ color: message.type === 'admin' ? 'green' : 'red' }}>
        <span>{message.timestamp}</span>
        <span>{message.nickname}</span>
        <span>{message.body}</span>
      </div>
    );
  }
}

Message.propTypes = {
  message: MessagePropType.isRequired,
};

export default Message;
