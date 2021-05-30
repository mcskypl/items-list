import React from 'react';
import AppContext from '../../context';
import style from './UserInfoPage.module.scss';

const UserInfoPage = () => (
  <AppContext.Consumer>

    {(context) => (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.desc}>
            <b>Nazwa użytkownika:</b>
            {' '}
            {context.currentUserFullNameApp}
          </div>
          <div className={style.desc}>
            <b>Funkcja:</b>
            {' '}
            {context.currentUserRoleNameApp}
          </div>
        </div>
      </div>
    )}

  </AppContext.Consumer>
);

export default UserInfoPage;
