import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MessagePropType } from '../PropTypes/propTypes';
import Message from './Message';

class MessagesList extends PureComponent {
  componentDidUpdate() {
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
    const { messages, classes, target } = this.props;
    return (
      <div className={classes} data-room={target}>
        {messages.map(message => (
          <Message
            key={`${message.nickname}_${message.timestamp}`}
            message={message}
          />
        ))}
      </div>
    );
  }
}
MessagesList.propTypes = {
  messages: PropTypes.arrayOf(MessagePropType).isRequired,
  classes: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default MessagesList;
