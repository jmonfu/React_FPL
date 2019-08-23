import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Replace this with your own config details
var config = {
    apiKey: "AIzaSyArEsmiwEGLMn6OTV_kTcU9HZIU2XK_KXo",
    authDomain: "fpl-app-59dcb.firebaseapp.com",
    databaseURL: "https://fpl-app-59dcb.firebaseio.com",
    projectId: "fpl-app-59dcb",
    storageBucket: "fpl-app-59dcb.appspot.com",
    messagingSenderId: "278235775000",
    appId: "1:278235775000:web:fb35995133100bf3"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ });
  
  export default firebase 