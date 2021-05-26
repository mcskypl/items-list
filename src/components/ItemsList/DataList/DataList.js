import React from 'react';
import style from './DataList.module.scss';

const DataList = ({ id, statusEditFn }) => (
  <select className={style.select} id={id} onChange={statusEditFn}>
    <option selected disabled>--Wybierz--</option>
    <option value="Zwolnione">Zwolnione</option>
    <option value="Wstrzymane">Wstrzymane</option>
    <option value="Niezgodne">Niezgodne</option>
  </select>
);

export default DataList;
