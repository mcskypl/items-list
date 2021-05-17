import React, { Component } from 'react';
import ItemsList from '../../components/ItemsList/ItemsList';
import * as FirestoreService from '../../services/firestore';
import AppContext from '../../context';

class MainPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    database: '',
  };

  componentDidMount() {
    FirestoreService.db
      .collection('opak')
      .orderBy('pz', 'desc')
      .onSnapshot((snapshot) => {
        const tmp = [];
        snapshot.forEach((doc) => {
          tmp.push({ id: doc.id, ...doc.data() });
        });
        this.setState({ database: tmp });
      });
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            {/* eslint-disable-next-line react/destructuring-assignment */}
            {context.currentUserApp.displayName ? <ItemsList database={this.state.database} user={context.currentUserApp.displayName} /> : ''}
          </>
        ) }
      </AppContext.Consumer>
    );
  }
}

export default MainPage;
