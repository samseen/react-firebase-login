import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyChl9B9mI2rt2O9bFGtzl3Migl7ilhhTME",
    authDomain: "login-1bc84.firebaseapp.com",
    projectId: "login-1bc84",
    storageBucket: "login-1bc84.appspot.com",
    messagingSenderId: "973028968667",
    appId: "1:973028968667:web:615a99a9582194869c64fe"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;