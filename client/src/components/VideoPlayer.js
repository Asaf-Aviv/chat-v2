import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ videoSrc, title }) => (
  <iframe
    className="message__iframe"
    src={videoSrc}
    title={title}
    type="text/html"
    frameBorder="0"
    width="100%"
    height="360"
    allowFullScreen
  />
);

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoPlayer;
