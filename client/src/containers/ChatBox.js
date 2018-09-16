import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MessagePropType } from '../PropTypes/propTypes';
import MessagesList from '../components/MessagesList';

class ChatBox extends PureComponent {
  render() {
    const { messages } = this.props;
    return (
      <div className="chatbox">
        <MessagesList messages={messages} classes="messageslist" />
      </div>
    );
  }
}

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(MessagePropType).isRequired,
};

export default ChatBox;
