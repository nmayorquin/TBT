
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD_MxoYRGF5JBHU9sGdhcpjvN4313kHXvI",
    authDomain: "bestteam-a5bbb.firebaseapp.com",
    projectId: "bestteam-a5bbb",
    storageBucket: "gs://bestteam-a5bbb.appspot.com",
    messagingSenderId: "273282269182",
    appId: "1:273282269182:web:231adf58f23fd1e2038aaf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database().ref("empleados");
document.getElementById("boton__agregarE").addEventListener("click", () =>{
    var agregarEmployee__nombreYapellido = document.getElementById("agregarE__nombre").value;
    var agregarEmployee__id = document.getElementById("agregarE__id").value;
    var agregarEmployee__correo = document.getElementById("agregarE__email").value;
    var agregarEmployee__pass = document.getElementById("agregarE__pass").value;
    var agregarEmployee__Repetpass= document.getElementById("agregarE__Repetpass").value;
    database.push("empleados");
  });


  
