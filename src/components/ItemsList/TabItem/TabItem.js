import React from 'react';
// import * as FirestoreService from '../../../services/firestore';
import AppContext from '../../../context';
import style from './TabItem.module.scss';
import okIcon from '../../../icons/ok.svg';
import DataList from '../dataList/dataList';

const TabItem = (
  {
    id,
    indexItem,
    addedTime,
    pz,
    quantity,
    batch,
    exDate,
    checkedBy,
    status,
    statusEdit,
  },
) => {
  console.log('ok');
  // const [newStatus, setNewStatus] = useState('');
  // const takeByEditFn = (e) => {
  //   FirestoreService.db.collection('opak').doc(e.target.id).update({
  //     takeBy: e.target.value,
  //     takeByEdit: false,
  //   });
  //   // .then(() => {
  //   //   console.log('Document successfully updated!');
  //   // })
  //   // .catch((error) => {
  //   //   // The document probably doesn't exist.
  //   //   console.error('Error updating document: ', error);
  //   // });
  // };
  //
  // const statusEditFn = (e) => {
  //   FirestoreService.db.collection('opak').doc(e.target.id).update({
  //     status: e.target.value,
  //     statusEdit: false,
  //     checkedBy: e.target.name,
  //   });
  //   // .then(() => {
  //   //   console.log('Document successfully updated!');
  //   // })
  //   // .catch((error) => {
  //   //   // The document probably doesn't exist.
  //   //   console.error('Error updating document: ', error);
  //   // });
  // };
  //
  // const statusResetFn = (e) => {
  //   FirestoreService.db.collection('opak').doc(e.target.id).update({
  //     statusEdit: true,
  //     status: '',
  //     checkedBy: '',
  //   });
  //   // .then(() => {
  //   //   console.log('Document successfully updated!');
  //   // })
  //   // .catch((error) => {
  //   //   // The document probably doesn't exist.
  //   //   console.error('Error updating document: ', error);
  //   // });
  // };
  return (
    <AppContext.Consumer>

      {() => (
        <>
          <div className={style.wrapper} key={id}>
            <div className={style.item}>
              {new Date(addedTime.seconds * 1000)
                .toISOString()
                .replace(/T.*/, '')
                .split('-')
                .join('-')}
            </div>
            <div className={style.item}>{pz}</div>
            <div className={style.item}>{indexItem}</div>
            <div className={style.item}>{quantity}</div>
            <div className={style.item}>{batch}</div>
            <div className={style.item}>{exDate}</div>
            <div className={style.item}>{checkedBy}</div>
            <div className={style.item}>
              {statusEdit ? <DataList /> : (
                <>
                  <p>{status}</p>
                  <img src={okIcon} alt="ok" className={style.img} />
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

// <tr value={id} className={status}>
//   <td>
//     {addedTime.getDate()}
//     .0
//     {addedTime.getMonth() + 1}
//     .
//     {addedTime.getFullYear()}
//   </td>
//   <td>
//     {pz}
//     /OPAK
//   </td>
//   <td className="itemsList__table__item__indexItem">{indexItem}</td>
//   <td className="itemsList__table__item__quantity">
//     {quantity}
//   </td>
//   <td>
//     {
//       takeByEdit
//         ? (
//           <select className="form-select" id={id} onChange={takeByEditFn}>
//             <option selected>Wybierz...</option>
//             <option value={context.currentUserApp.displayName}>
//               {context.currentUserApp.displayName}
//             </option>
//           </select>
//         )
//         : takeBy
//     }
//   </td>
//   <td>
//     <h6>{checkedBy || '------'}</h6>
//
//   </td>
//   <td>
//     {
//       // eslint-disable-next-line no-nested-ternary
//       statusEdit
//         ? (
//           <select className="form-select" id={id} name={context.currentUserApp.displayName} onChange={statusEditFn}>
//             <option selected>Wybierz...</option>
//             <option value="Zgodne">Zgodne</option>
//             <option value="Wstrzymane">Wstrzymane</option>
//             <option value="Niedopuszczone">Niedopuszczone</option>
//           </select>
//         )
//         : context.currentUserRoleApp === 'admin' ? (
//           // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
//           <h6 className="tabItem__pointer" id={id} onClick={statusResetFn}>
//             {status}
//           </h6>
//         )
//         : (
//           // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
//           <h6 className="tabItem__pointer" id={id}>
//             {status}
//           </h6>
//         )
//     }
//
//   </td>
// </tr>
