import React from 'react';
import './TabItem.css';
import * as FirestoreService from '../../../services/firestore';
import AppContext from '../../../context';

const TabItem = ({
  id,
  indexItem,
  addedTime,
  pz,
  quantity,
  takeBy,
  takeByEdit,
  checkedBy,
  status,
  statusEdit,
}) => {
  const takeByEditFn = (e) => {
    console.log(e.target.id);

    FirestoreService.db.collection('opak').doc(e.target.id).update({
      takeBy: e.target.value,
      takeByEdit: false,
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  const statusEditFn = (e) => {
    FirestoreService.db.collection('opak').doc(e.target.id).update({
      status: e.target.value,
      statusEdit: false,
      checkedBy: e.target.name,
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  const statusResetFn = (e) => {
    FirestoreService.db.collection('opak').doc(e.target.id).update({
      statusEdit: true,
      status: '',
      checkedBy: '',
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  return (
    <AppContext.Consumer>

      {(context) => (
        <>
          <tr value={id} className={status}>
            <td>
              {addedTime.getDate()}
              .0
              {addedTime.getMonth() + 1}
              .
              {addedTime.getFullYear()}
            </td>
            <td>
              {pz}
              /OPAK
            </td>
            <td>{indexItem}</td>
            <td>{quantity}</td>
            <td className="col-sm-2">
              {
              takeByEdit
                ? (
                  <select className="form-select" id={id} onChange={takeByEditFn}>
                    <option selected>Wybierz...</option>
                    <option value={context.currentUserApp.displayName}>
                      {context.currentUserApp.displayName}
                    </option>
                  </select>
                )
                : takeBy
              }
            </td>
            <td className="col-sm-2">
              <h6>{checkedBy || '------'}</h6>

            </td>
            <td className="col-sm-2">
              {
                // eslint-disable-next-line no-nested-ternary
                statusEdit
                  ? (
                    <select className="form-select" id={id} name={context.currentUserApp.displayName} onChange={statusEditFn}>
                      <option selected>Wybierz...</option>
                      <option value="Zgodne">Zgodne</option>
                      <option value="Wstrzymane">Wstrzymane</option>
                      <option value="Niedopuszczone">Niedopuszczone</option>
                    </select>
                  )
                  : context.currentUserRoleApp === 'admin' ? (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                    <h6 className="tabItem__pointer" id={id} onClick={statusResetFn}>
                      {status}
                    </h6>
                  )
                    : (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                      <h6 className="tabItem__pointer" id={id}>
                        {status}
                      </h6>
                    )
              }

            </td>
          </tr>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default TabItem;
