import React, { useState } from 'react';
import * as FirestoreService from '../../services/firestore';

const LoginPage = ({ setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFn = (e) => {
    e.preventDefault();
    FirestoreService.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setCurrentUser(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Hasło</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={loginFn}>Zaloguj się</button>
      </form>
    </div>
  );
};

export default LoginPage;
