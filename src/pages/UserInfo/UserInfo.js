import React from 'react';
import AppContext from '../../context';

const UserInfo = () => (
  <AppContext.Consumer>

    {(context) => (
      <h1>{context.currentUserRoleApp}</h1>
    )}

  </AppContext.Consumer>
);

export default UserInfo;
