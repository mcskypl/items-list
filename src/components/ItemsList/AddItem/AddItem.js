import React, { useState } from 'react';
import * as FirestoreService from '../../../services/firestore';
import style from './AddItem.module.scss';
import addIcon from '../../../icons/add.svg';

const AddItem = () => {
  const [currentPz, setCurrentPz] = useState('');
  const [currentIndex, setCurrentIndex] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');
  const [currentBatch, setCurrentBatch] = useState('');
  const [currentExDate, setCurrentExDate] = useState('');
  const [currentUnit, setCurrentUnit] = useState('');
  const [currentPzMag, setCurrentPzMag] = useState('');

  if (currentBatch === '') setCurrentBatch('n/a');
  if (currentExDate === '') setCurrentExDate('n/a');
  if (currentUnit === '') setCurrentUnit('szt.');
  if (currentPzMag === '') setCurrentPzMag('OPAK');

  const addItemFn = (e) => {
    e.preventDefault();

    FirestoreService.db.collection('opak').add({
      addedTime: new Date(),
      pz: currentPz,
      pzMag: currentPzMag,
      indexItem: currentIndex.toUpperCase(),
      quantity: currentQuantity,
      unit: currentUnit,
      batch: currentBatch.toUpperCase(),
      exDate: currentExDate,
      checkedBy: '----------',
      status: '',
      statusEdit: true,
    });
  // .then((docRef) => {
  //   console.log('Document written with ID: ', docRef.id);
  // })
  // .catch((error) => {
  //   console.error('Error adding document: ', error);
  // });
  };
  return (
    <>
      <form className={style.wrapper} onSubmit={addItemFn}>
        <input required type="number" placeholder="numer pz" className={style.box} onChange={(e) => setCurrentPz(e.target.value)} />
        <select defaultValue="OPAK" className={style.boxSmall} onChange={(e) => setCurrentPzMag(e.target.value)}>
          <option selected value="OPAK">OPAK</option>
          <option value="SWO">SWO</option>
        </select>
        <input required type="text" placeholder="index" className={style.box} onChange={(e) => setCurrentIndex(e.target.value)} />
        <input required type="number" step="0.01" placeholder="ilość" className={style.box} onChange={(e) => setCurrentQuantity(e.target.value)} />
        <select defaultValue="szt." className={style.boxSmall} onChange={(e) => setCurrentUnit(e.target.value)}>
          <option selected value="szt.">szt.</option>
          <option value="kg">kg</option>
          <option value="m">m</option>
        </select>
        <input type="text" placeholder="partia" className={style.box} onChange={(e) => setCurrentBatch(e.target.value)} />
        <input type="date" placeholder="data ważności" className={style.box} onChange={(e) => setCurrentExDate(e.target.value)} />
        <button type="submit" className={style.boxSmall}>
          <img src={addIcon} alt="Dodaj" />
        </button>
      </form>
    </>
  );
};

export default AddItem;
