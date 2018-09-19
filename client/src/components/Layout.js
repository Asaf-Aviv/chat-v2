import React, { Component } from 'react';
import RoomTabs from '../containers/RoomTabs';
import ChatBox from '../containers/ChatBox';
import RoomsList from '../containers/RoomsList';
import OpenRoom from './OpenRoom';
import ChatInput from './ChatInput';
import UsersList from '../containers/UsersList';
import userStatusHandler from '../utils/userStatusHandler';

class ChatLayout extends Component {
  componentDidMount = () => {
    document.addEventListener('mousemove', userStatusHandler, false);
    document.addEventListener('mousedown', userStatusHandler, false);
    document.addEventListener('keypress', userStatusHandler, false);
    document.addEventListener('DOMMouseScroll', userStatusHandler, false);
    document.addEventListener('mousewheel', userStatusHandler, false);
    document.addEventListener('touchmove', userStatusHandler, false);
    document.addEventListener('MSPointerMove', userStatusHandler, false);
  }

  render() {
    return (
      <div className="layout">
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
export default ChatLayout;
