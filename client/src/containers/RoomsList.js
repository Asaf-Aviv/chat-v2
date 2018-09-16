import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Room from '../components/Room';

class RoomsList extends PureComponent {
  render() {
    const { roomsList } = this.props;
    return (
      <div className="roomslist">
        {roomsList.map(room => <Room key={room} room={room} />)}
      </div>
    );
  }
}

RoomsList.propTypes = {
  roomsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  roomsList: state.roomsList,
});

export default connect(mapStateToProps)(RoomsList);
