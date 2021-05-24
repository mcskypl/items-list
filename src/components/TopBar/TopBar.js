import React from 'react';
// import { Link } from 'react-router-dom';
import AppContext from '../../context';
import * as FirestoreService from '../../services/firestore';
import style from './TobBar.module.scss';
import userIcon from '../../icons/user.svg';
import logoutIcon from '../../icons/logout.svg';
import infoIcon from '../../icons/info.svg';
import settingsIcon from '../../icons/settings.svg';

const TopBar = () => {
  const logOutFn = (e) => {
    e.preventDefault();
    FirestoreService.auth()
      .signOut();
  // .then(() => {
  //   console.log('Wylogowano');
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  };
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={style.wrapper}>
          <div className={style.left}>
            <img className={style.icon} src={userIcon} alt="User" />
            <div className={style.user}>
              <h3 className={style.name}>{context.currentUserFullNameApp}</h3>
              <h5 className={style.magazyn}>Magazyn 4</h5>
            </div>
            <div className={style.buttons}>
              <p>OPAK</p>
              <p>SWO</p>
            </div>
          </div>
          <div className={style.right}>
            <img className={style.icon} src={infoIcon} alt="Informacje" />
            <img className={style.icon} src={settingsIcon} alt="Ustawienia" />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <img className={style.icon} src={logoutIcon} alt="Wyloguj się" onClick={logOutFn} />
          </div>
        </div>

      )}
    </AppContext.Consumer>
  );
};
export default TopBar;

// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <Link to="/" className="navbar-brand">{context.currentUserFullNameApp}</Link>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         {context.currentUserFullNameApp
//           ? (
//             <>
//               <li className="nav-item">
//                 <Link to="/" className="nav-link" aria-current="page">Opakowania</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/" className="nav-link" aria-current="page">Surowce w oczekiwaniu</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/userInfo" className="nav-link" aria-current="page">Informacje u użytkowniku</Link>
//               </li>
//
//               <li className="nav-item">
//                 <input value="Wyloguj się" type="button" onClick={logOutFn} className="btn btn-outline-light" aria-current="page" />
//               </li>
//
//             </>
//           )
//           : (
//             <li className="nav-item">
//               <Link to="/login" className="nav-link" aria-current="page">Login</Link>
//             </li>
//           )}
//
//       </ul>
//     </div>
//   </div>
// </nav>
