import React, { Component }  from 'react';
import { connect } from 'react-redux';

const Authentication = props => {
  const { history, authenticated } = props;

  if (!authenticated) {
    history.push('/search');
  }

  return(
    <div>
      {props.children}
    </div>
  );
};

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
};

export default connect(mapStateToProps)(Authentication);
