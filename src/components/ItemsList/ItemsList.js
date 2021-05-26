import React from 'react';
import TabItem from './TabItem/TabItem';
import AddItem from './AddItem/AddItem';
import style from './ItemsList.module.scss';

const ItemsList = ({ database, userRole, userFullNameApp }) => (
  <div className="container">

    {database ? '' : (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )}

    {userRole === 'admin' && database ? <AddItem /> : ''}
    <div className={style.wrapper}>
      {
      database ? database.map((i) => (
        <TabItem
          key={i.id}
          id={i.id}
          addedTime={i.addedTime}
          pz={i.pz}
          pzMag={i.pzMag}
          indexItem={i.indexItem}
          quantity={i.quantity}
          unit={i.unit}
          batch={i.batch}
          exDate={i.exDate}
          checkedBy={i.checkedBy}
          status={i.status}
          statusEdit={i.statusEdit}
          userFullNameApp={userFullNameApp}
          userRole={userRole}
        />
      )) : ''
    }
    </div>
  </div>
);

export default ItemsList;
