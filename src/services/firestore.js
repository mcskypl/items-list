import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCzEUx_yrasbq8i28rvzVdR8B20mzYofc',
  authDomain: 'items-list-be69c.firebaseapp.com',
  projectId: 'items-list-be69c',
  storageBucket: 'items-list-be69c.appspot.com',
  messagingSenderId: '895474299648',
  appId: '1:895474299648:web:cdb678ff5d0b38a33379e5',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const { auth } = firebase;
