import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as FirestoreService from './services/firestore';
import AppContext from './context';
import TopBar from './components/TopBar/TopBar';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserInfo from './pages/UserInfo/UserInfo';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserRole, setCurrentUserRole] = useState('');

  const appContextData = {
    currentUserApp: currentUser,
    currentUserRoleApp: currentUserRole,
  };

  FirestoreService.auth().onAuthStateChanged((user) => {
    if (user) setCurrentUser(user);
    else setCurrentUser('');

    FirestoreService.db
      .collection('users')
      .doc(user.email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setCurrentUserRole(doc.data().role);
        } else {
        // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  });

  return (
    <Router>
      <AppContext.Provider value={appContextData}>
        <TopBar />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginPage setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/userInfo">
            <UserInfo />
          </Route>
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
