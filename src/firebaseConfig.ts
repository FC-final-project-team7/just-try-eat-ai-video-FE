import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD_LHgJq8NMZce9-tQHXlIJU_tk7brZnao',
  authDomain: 'aiavatar-6ee34.firebaseapp.com',
  projectId: 'aiavatar-6ee34',
  storageBucket: 'aiavatar-6ee34.appspot.com',
  messagingSenderId: '46581931512',
  appId: '1:46581931512:web:ff181319df2936e30c8a0d',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
