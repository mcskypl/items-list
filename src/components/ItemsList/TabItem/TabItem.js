import React from 'react';
import * as FirestoreService from '../../../services/firestore';
import AppContext from '../../../context';
import style from './TabItem.module.scss';
import zwolnioneImg from '../../../icons/zwolnione.svg';
import wstrzymaneImg from '../../../icons/wstrzymane.svg';
import niezgodneImg from '../../../icons/niezgodne.svg';
import DataList from '../DataList/DataList';
// import infoIcon from '../../../icons/info.svg';

const TabItem = (
  {
    id,
    indexItem,
    addedTime,
    pz,
    pzMag,
    quantity,
    unit,
    batch,
    exDate,
    checkedBy,
    status,
    statusEdit,
    userFullNameApp,
    userRole,
  },
) => {
  const statusEditFn = (e) => {
    FirestoreService.db.collection('opak').doc(e.target.id).update({
      status: e.target.value,
      statusEdit: false,
      checkedBy: userFullNameApp,
    });
    // .then(() => {
    //   console.log('Document successfully updated!');
    // })
    // .catch((error) => {
    //   // The document probably doesn't exist.
    //   console.error('Error updating document: ', error);
    // });
  };
  //
  const statusResetFn = (e) => {
    if (userRole === 'admin') {
      // eslint-disable-next-line no-restricted-globals,no-alert
      const r = confirm('Czy na pewno usunąć status?');
      if (r === true) {
        FirestoreService.db.collection('opak').doc(e.target.id).update({
          statusEdit: true,
          status: '',
          checkedBy: '----------',
        });
      }
    }

    // .then(() => {
    //   console.log('Document successfully updated!');
    // })
    // .catch((error) => {
    //   // The document probably doesn't exist.
    //   console.error('Error updating document: ', error);
    // });
  };
  let statusImg = '';

  if (status === 'Zwolnione') { statusImg = <img src={zwolnioneImg} aria-hidden="true" alt="Zwolnione" id={id} onClick={statusResetFn} />; }
  if (status === 'Wstrzymane') { statusImg = <img src={wstrzymaneImg} aria-hidden="true" alt="Wstrzymane" id={id} onClick={statusResetFn} />; }
  if (status === 'Niezgodne') { statusImg = <img src={niezgodneImg} aria-hidden="true" alt="Niezgodne" id={id} onClick={statusResetFn} />; }

  return (
    <AppContext.Consumer>

      {() => (
        <>
          <div className={style.wrapper} key={id}>
            <div className={style.itemSmall}>
              {new Date(addedTime.seconds * 1000)
                .toISOString()
                .replace(/T.*/, '')
                .split('-')
                .join('-')}
            </div>
            <div className={style.itemSmall}>
              {pz}
              {'/'}
              {pzMag}
            </div>
            <div className={style.itemSmall}>{indexItem}</div>
            <div className={style.itemSmall}>
              {quantity}
              {' '}
              {unit}
            </div>
            <div className={style.itemSmall}>{batch || 'n/a'}</div>
            <div className={style.itemSmall}>{exDate || 'n/a'}</div>
            <div className={style.item}>{checkedBy}</div>
            <div className={style.item}>
              {statusEdit ? <DataList id={id} statusEditFn={statusEditFn} /> : (
                <>
                  <p>{status}</p>
                  {statusImg}
                </>
              )}
            </div>

          </div>
        </>
      )}
    </AppContext.Consumer>
  );
};
export default TabItem;
