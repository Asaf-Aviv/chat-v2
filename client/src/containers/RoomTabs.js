import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RoomTab from '../components/RoomTab';
import { activateTab } from '../utils/utils';

class RoomTabs extends Component {
  onTabClick = (e) => {
    let tab = e.target;
    if (tab.parentNode.classList.contains('room__tab')) {
      tab = tab.parentNode;
    }
    if (tab.classList.contains('room__tab')) {
      activateTab(tab.getAttribute('data-room'));
    }
  }

  render() {
    const { myRooms } = this.props;
    return (
      <div className="room__tabs" onClick={this.onTabClick}>
        {myRooms.map(roomName => <RoomTab key={roomName} roomName={roomName} />)}
      </div>
    );
  }
}

RoomTabs.propTypes = {
  myRooms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  myRooms: state.myRooms,
});

export default connect(mapStateToProps)(RoomTabs);
