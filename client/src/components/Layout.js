import React, { Component } from 'react';
import RoomTabs from '../containers/RoomTabs';
import ChatBox from '../containers/ChatBox';
import RoomsList from '../containers/RoomsList';
import OpenRoom from './OpenRoom';
import ChatInput from './ChatInput';
import UsersList from '../containers/UsersList';

class ChatLayout extends Component {
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
