

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD_MxoYRGF5JBHU9sGdhcpjvN4313kHXvI",
    authDomain: "bestteam-a5bbb.firebaseapp.com",
    projectId: "bestteam-a5bbb",
    storageBucket: "gs://bestteam-a5bbb.appspot.com",
    messagingSenderId: "273282269182",
    appId: "1:273282269182:web:231adf58f23fd1e2038aaf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); //objeto creado con intención de que se use para guardar datos de autenticación


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

 
