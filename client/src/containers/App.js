import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import NicknameInput from '../components/NicknameInput';

import './App.sass';

const App = ({ nickname }) => (nickname ? <Layout nickname={nickname} /> : <NicknameInput />);

const mapStateToProps = state => ({
  nickname: state.nickname,
});

App.propTypes = {
  nickname: PropTypes.string,
};

App.defaultProps = {
  nickname: '',
};

export default connect(mapStateToProps)(App);
