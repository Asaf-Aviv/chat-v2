import React from 'react';
import PropTypes from 'prop-types';

const UploadedFile = ({ file }) => (
  <audio
    className="audio-player"
    controls
    src={file.path.replace('uploads', 'file')}
  />
);

UploadedFile.propTypes = {
  file: PropTypes.shape({
    fieldname: PropTypes.string.isRequired,
    originalname: PropTypes.string.isRequired,
    encoding: PropTypes.string.isRequired,
    mimetype: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
};

export default UploadedFile;
