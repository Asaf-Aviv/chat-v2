import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChatLayout from '../components/ChatLayout';
import NicknameInput from '../components/NicknameInput';

import './App.sass';

const App = ({ nickname }) => (nickname ? <ChatLayout /> : <NicknameInput />);

const mapStateToProps = state => ({
  nickname: state.nickname,
});

App.propTypes = {
  nickname: PropTypes.string,
};

App.defaultProps = {
  nickname: '',
};

export default connect(
  mapStateToProps,
  null,
)(App);
