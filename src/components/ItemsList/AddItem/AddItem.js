import React, { useState } from 'react';
import * as FirestoreService from '../../../services/firestore';

const AddItem = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentPz, setCurrentPz] = useState('');
  const [currentIndex, setCurrentIndex] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');

  const addItemFn = () => {
    FirestoreService.db.collection('opak').add({
      addedTime: new Date(currentDate),
      pz: Number(currentPz),
      indexItem: currentIndex,
      quantity: currentQuantity,
      takeBy: '',
      takeByEdit: true,
      checkedBy: '',
      status: '',
      statusEdit: true,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <table className="table addItem__table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Nr pz</th>
          <th>Index</th>
          <th>Ilość</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input className="form-control" type="date" onChange={(e) => setCurrentDate(e.target.value)} />
          </td>
          <td>
            <input className="form-control" type="number" onChange={(e) => setCurrentPz(e.target.value)} />
          </td>
          <td>
            <input className="form-control" type="text" onChange={(e) => setCurrentIndex(e.target.value.toUpperCase())} />
          </td>
          <td>
            <input className="form-control" type="text" onChange={(e) => setCurrentQuantity(e.target.value)} />
          </td>
          <td>
            <button onClick={addItemFn} type="button" className="btn btn-success">Dodaj</button>
          </td>
        </tr>
      </tbody>
    </table>

  );
};

export default AddItem;
