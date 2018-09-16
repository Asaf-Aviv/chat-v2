import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MessagePropType } from '../PropTypes/propTypes';
import UsersList from './UsersList';
import ChatInput from '../components/ChatInput';
import ChatBox from './ChatBox';
import RoomContainer from './RoomContainer';

const RoomsContainer = ({ myRooms, usersList, roomMessages }) => (
  <>
    {myRooms.map(roomName => (
      <RoomContainer roomName={roomName} key={roomName}>
        <UsersList usersList={usersList[roomName]} />
        <ChatBox messages={roomMessages[roomName]} />
        <ChatInput roomName={roomName} />
      </RoomContainer>
    ))}
  </>
);

RoomsContainer.propTypes = {
  myRooms: PropTypes.arrayOf(PropTypes.string).isRequired,
  roomMessages: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(MessagePropType),
  }).isRequired,
  usersList: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapStateToProps = state => ({
  myRooms: state.myRooms,
  roomMessages: state.roomMessages,
  usersList: state.usersList,
});

export default connect(
  mapStateToProps,
  null,
)(RoomsContainer);
