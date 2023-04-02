import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDMd_LWc-bEHFYpGnp3swoyTL81_OJuqBk',
  authDomain: 'blog-app-86981.firebaseapp.com',
  projectId: 'blog-app-86981',
  storageBucket: 'blog-app-86981.appspot.com',
  messagingSenderId: '801176479180',
  appId: '1:801176479180:web:baea311402167cf305a969',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
