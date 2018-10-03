import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MessagePropType } from '../PropTypes/propTypes';

class Message extends PureComponent {
  render() {
    const { message, nickname, color } = this.props;
    /* eslint-disable no-nested-ternary */
    const classes = message.type === 'admin'
      ? 'message--admin' : message.nickname === nickname
        ? 'message--self' : 'message--user';
    /* eslint-ename no-nested-ternary */
    return (
      <div className={`message ${classes}`}>
        <time className="message__time">{moment(message.timestamp).format('hh:mm:ss')}</time>
        {message.nickname
          && <span className="message__nickname" style={{ color }}>{`${message.nickname}:`}</span>
        }
        <span className="message__body">{message.body}</span>
      </div>
    );
  }
}

Message.propTypes = {
  message: MessagePropType.isRequired,
  nickname: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  nickname: state.nickname,
});

export default connect(mapStateToProps)(Message);
