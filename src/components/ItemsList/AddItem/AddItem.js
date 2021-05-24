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

  const addItemFn = (e) => {
    if (currentBatch === '') setCurrentBatch('n/a');
    if (currentExDate === '') setCurrentExDate('n/a');
    e.preventDefault();

    console.log(currentBatch, currentExDate);
    FirestoreService.db.collection('opak').add({
      addedTime: new Date(),
      pz: currentPz,
      indexItem: currentIndex,
      quantity: currentQuantity,
      batch: currentBatch,
      exDate: currentExDate,
      checkedBy: '----------',
      status: '----------',
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
        <input required type="text" placeholder="numer pz" className={style.box} onChange={(e) => setCurrentPz(e.target.value)} />
        <input required type="text" placeholder="index" className={style.box} onChange={(e) => setCurrentIndex(e.target.value)} />
        <input required type="text" placeholder="ilość" className={style.box} onChange={(e) => setCurrentQuantity(e.target.value)} />
        <input type="text" placeholder="partia" className={style.box} onChange={(e) => setCurrentBatch(e.target.value)} />
        <input type="date" placeholder="data ważności" className={style.box} onChange={(e) => setCurrentExDate(e.target.value)} />
        <button type="submit" className={style.box}>
          <img src={addIcon} alt="Dodaj" />
        </button>
      </form>

      <div className={style.line} />
    </>
  );
};

export default AddItem;
