import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { activateTab } from '../utils/utils';

class RoomContainer extends PureComponent {
  componentDidMount = () => {
    activateTab(this.props.roomName);
  }

  render() {
    const { roomName, children } = this.props;
    return (
      <div id={roomName} className="roomcontainer">
        {children}
      </div>
    );
  }
}

RoomContainer.propTypes = {
  roomName: PropTypes.PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};


export default RoomContainer;
