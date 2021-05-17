import React from 'react';
import TabItem from './TabItem/TabItem';
import AddItem from './AddItem/AddItem';

const ItemsList = ({ database, user }) => (
  <div className="container">
    <h2>{database ? '' : 'Ładowanie danych ✨'}</h2>
    {user === 'Sebastian Westfal' ? <AddItem /> : ''}

    <table className="table itemsList__table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Nr pz</th>
          <th>Index</th>
          <th>Ilość</th>
          <th>Pobrał/a</th>
          <th>Sprawdził/a</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>

        {
            database ? database.map((i) => (
              <TabItem
                id={i.id}
                addedTime={i.addedTime.toDate()}
                pz={i.pz}
                indexItem={i.indexItem}
                quantity={i.quantity}
                takeBy={i.takeBy}
                takeByEdit={i.takeByEdit}
                checkedBy={i.checkedBy}
                status={i.status}
                statusEdit={i.statusEdit}
              />
            )) : ''
          }
      </tbody>
    </table>
  </div>
);

export default ItemsList;
