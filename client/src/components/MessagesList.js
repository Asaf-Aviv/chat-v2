import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MessagePropType, UserPropType } from '../PropTypes/propTypes';
import Message from './Message';

class MessagesList extends PureComponent {
  componentDidMount = () => {
    // const messagesLists = document.querySelectorAll('.messages__list')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length === this.props.messages.length) {
      return;
    }

    const roomTab = document.querySelector(`.room__tab[data-room=${this.props.target}]`);
    const msgContainer = document.querySelector('.messages__list');

    if (!roomTab.classList.contains('active')) {
      const notifications = roomTab.querySelector('.room__tab__notifications');
      notifications.innerHTML = +notifications.innerHTML + 1;
    }

    if (msgContainer.scrollTop >= (msgContainer.scrollHeight - msgContainer.offsetHeight - 50)) {
      msgContainer.scrollTop = msgContainer.offsetHeight;
    }
  }

  render() {
    const { messages, target, users } = this.props;
    return (
      <div className="messages__list" data-room={target}>
        {messages.map(message => (
          <Message
            key={`${message.nickname}_${message.timestamp}`}
            message={message}
            color={message.type !== 'admin' && users[message.nickname].color}
          />
        ))}
      </div>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(MessagePropType).isRequired,
  target: PropTypes.string.isRequired,
  users: PropTypes.shape({ [PropTypes.string]: PropTypes.arrayOf(UserPropType) }).isRequired,
};

export default MessagesList;
