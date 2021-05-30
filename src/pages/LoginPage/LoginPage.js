import React, { useState } from 'react';
import * as FirestoreService from '../../services/firestore';
import style from './LoginPage.module.scss';

const LoginPage = ({ setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFn = (e) => {
    e.preventDefault();
    FirestoreService.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
      })
      .catch(() => {
        alert('Nipoprawny login lub hasło!');
      });
  };

  return (
    <div className={style.wrapper}>
      <form>
        <h1>Zaloguj się</h1>
        <div className={style.box}>
          <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
          <input
            type="email"
            placeholder="name@example.com"
            className={style.loginInput}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.box}>
          <label htmlFor="exampleInputPassword1" className="form-label">Hasło</label>
          <input
            type="password"
            placeholder="••••••••"
            className={style.loginInput}
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
