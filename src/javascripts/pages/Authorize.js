import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as SpotifyAuthActions from '@js/store/actions/SpotifyAuthActions';

const Authorize = props => {
  const { authenticated, client_id, token, history } = props;
  const isAutenticated = () => authenticated;
  let tokenParam = extractTokenFromUrl();

  const DEFAULT_SCOPES = ['user-read-private user-read-email'];
  const DEFAULT_RESPONSE_TYPE = 'code';
  const SPOTIFY_AUTHORIZE_URL = `http://localhost:8888/login`;

  // User not connect yet
  if (!isAutenticated()) {

    // not receive token yet
    if (!tokenParam) {
      window.location.href = SPOTIFY_AUTHORIZE_URL;
    }
    // receive token from url
    else {
      token(tokenParam);
    }
  }
  // User authenticated
  else {
    history.push('/search');
  }

  return (
    <div>Loading...</div>
  );
};

const extractTokenFromUrl = () => {
  let params = new URL(location).searchParams;
  let code = params.get('code');

  return code;
};

const mapStateToProps = state => ({
  authenticated: state.SpotifyAuthReducer.authenticated,
  client_id: state.SpotifyAuthReducer.Client_ID,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SpotifyAuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
