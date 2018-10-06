import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoomTabs from '../containers/RoomTabs';
import ChatBox from '../containers/ChatBox';
import RoomsList from '../containers/RoomsList';
import OpenRoom from './OpenRoom';
import ChatInput from './ChatInput';
import UsersList from '../containers/UsersList';
import userStatusHandler from '../utils/userStatusHandler';

class ChatLayout extends Component {
  componentDidMount = () => {
    document.addEventListener('mousemove', userStatusHandler);
    document.addEventListener('mousedown', userStatusHandler);
    document.addEventListener('keypress', userStatusHandler);
    document.addEventListener('DOMMouseScroll', userStatusHandler);
    document.addEventListener('mousewheel', userStatusHandler);
    document.addEventListener('touchmove', userStatusHandler);
    document.addEventListener('MSPointerMove', userStatusHandler);
  }

  render() {
    return (
      <div className="layout" data-nickname={this.props.nickname}>
        <RoomTabs />
        <UsersList />
        <RoomsList />
        <ChatBox />
        <ChatInput />
        <OpenRoom />
      </div>
    );
  }
}

ChatLayout.propTypes = {
  nickname: PropTypes.string.isRequired,
};
export default ChatLayout;
