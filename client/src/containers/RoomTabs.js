import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RoomTab from '../components/RoomTab';
import { activateTab } from '../utils/utils';

class RoomTabs extends PureComponent {
  onTabClick = (e) => {
    let tab = e.target;
    if (tab.parentNode.classList.contains('roomtab')) {
      tab = tab.parentNode;
    }
    if (tab.classList.contains('roomtab')) {
      activateTab(tab.getAttribute('data-target'));
    }
  }

  render() {
    const { myRooms } = this.props;
    return (
      <div className="roomtabs" onClick={this.onTabClick}>
        {myRooms.map(roomName => (
          <RoomTab
            key={roomName}
            roomName={roomName}
          />
        ))}
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

export default connect(
  mapStateToProps,
  null,
)(RoomTabs);
