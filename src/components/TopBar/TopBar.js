import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context';
import * as FirestoreService from '../../services/firestore';

const TopBar = () => {
  const logOutFn = (e) => {
    e.preventDefault();
    FirestoreService.auth()
      .signOut()
      .then(() => {
        console.log('Wylogowano');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">{context.currentUserApp.displayName}</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {context.currentUserApp.displayName
                  ? (
                    <>
                      <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Opakowania</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Surowce w oczekiwaniu</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/userInfo" className="nav-link" aria-current="page">Informacje u użytkowniku</Link>
                      </li>
                      <li className="nav-item text-end">
                        <input value="Wyloguj się" type="button" onClick={logOutFn} className="btn btn-link" aria-current="page" />
                      </li>
                    </>
                  )
                  : (
                    <li className="nav-item">
                      <Link to="/login" className="nav-link" aria-current="page">Login</Link>
                    </li>
                  )}

              </ul>
            </div>
          </div>
        </nav>
      )}
    </AppContext.Consumer>
  );
};

export default TopBar;
