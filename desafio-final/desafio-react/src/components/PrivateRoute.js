import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={prop => (isAuth ? (
        <Component {...prop} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: prop.location }
        }}
        />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired
};


const mapStateToProps = ({ Auth }) => ({
  isAuth: Auth.isAuth
});

export default connect(mapStateToProps)(PrivateRoute);
