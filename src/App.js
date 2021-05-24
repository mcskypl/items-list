import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as FirestoreService from './services/firestore';
import AppContext from './context';
import TopBar from './components/TopBar/TopBar';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserFullName, setCurrentUserFullName] = useState('');
  const [currentUserRole, setCurrentUserRole] = useState('');
  const [currentUserRoleName, setCurrentUserRoleName] = useState('');
  const [currentUserHala, setCurrentUserHala] = useState('');

  const appContextData = {
    currentUserApp: currentUser,
    currentUserFullNameApp: currentUserFullName,
    currentUserRoleApp: currentUserRole,
    currentUserRoleNameApp: currentUserRoleName,
    currentUserHalaApp: currentUserHala,
  };

  FirestoreService.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);

      FirestoreService.db
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setCurrentUserFullName(doc.data().fullName);
            setCurrentUserRole(doc.data().role);
            setCurrentUserRoleName(doc.data().roleName);
            setCurrentUserHala(doc.data().hala);
          } else {
            setCurrentUserRole('Brak danych');
          }
        });
      // .catch((error) => {
      //   console.log('Error getting document:', error);
      // });
    } else {
      setCurrentUser('');
      setCurrentUserRole('');
      setCurrentUserFullName('');
      setCurrentUserRoleName('');
      setCurrentUserHala('');
    }
  });

  return (
    <Router>
      <AppContext.Provider value={appContextData}>
        <TopBar />
        <Switch>
          <Route path="/" exact>
            {currentUser ? <MainPage /> : <LoginPage setCurrentUser={setCurrentUser} />}
          </Route>
          <Route path="/login">
            <LoginPage setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/userInfo">
            <UserInfoPage />
          </Route>
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
