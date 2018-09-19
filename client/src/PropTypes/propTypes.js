import PropTypes from 'prop-types';

export const UserPropType = PropTypes.shape({
  nickname: PropTypes.string.isRequired,
  isAway: PropTypes.bool.isRequired,
});

export const MessagePropType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
});
