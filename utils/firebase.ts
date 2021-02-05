import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB8DCwaHNg6Pt3dx3pY_yU0UEiI7Z5SRpo',
  authDomain: 'chris-will-email-you.firebaseapp.com',
  projectId: 'chris-will-email-you',
  storageBucket: 'chris-will-email-you.appspot.com',
  messagingSenderId: '31833860312',
  appId: '1:31833860312:web:9be96501291dd93bf28fad',
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export default initFirebase;
