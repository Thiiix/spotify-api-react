import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

const Search = props => {
  const { SpotifyAuthReducer, history } = props;

  return(
    <div>
      {SpotifyAuthReducer.access_token}
    </div>
  );
}

const mapStateToProps = state => ({
  SpotifyAuthReducer: state.SpotifyAuthReducer
});

export default connect(mapStateToProps)(Search);
