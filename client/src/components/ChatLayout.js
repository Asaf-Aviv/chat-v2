import React from 'react';
import RoomTabs from '../containers/RoomTabs';
import RoomsContainer from '../containers/RoomsContainer';
import RoomsList from '../containers/RoomsList';
import PrivateMessages from '../containers/PrivateMessages';
import OpenRoomModal from './OpenRoomModal';

const ChatLayout = () => (
  <div className="layout">
    <RoomTabs />
    <RoomsContainer />
    <RoomsList />
    <PrivateMessages />
    <OpenRoomModal />
  </div>
);

export default ChatLayout;
