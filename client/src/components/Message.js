import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MessagePropType } from '../PropTypes/propTypes';

class Message extends PureComponent {
  render() {
    const { message, nickname } = this.props;
    /* eslint-disable no-nested-ternary */
    const classes = message.type === 'admin'
      ? 'message--admin' : message.nickname === nickname
        ? 'message-self' : 'message--user';
    /* eslint-ename no-nested-ternary */
    return (/*  */
      <div className={`${classes} messages__list__item`}>
        <span>{message.timestamp}</span>
        <span>{message.nickname}</span>
        <span>{message.body}</span>
      </div>
    );
  }
}

Message.propTypes = {
  message: MessagePropType.isRequired,
  nickname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  nickname: state.nickname,
});

export default connect(mapStateToProps)(Message);
