//función para formulario de index

function guardar (){
    db.collection("usuarios").add({
        nombres:document.getElementById("nombre_usuario").value,
        apellidos: document.getElementById("apellido_usuario").value,
        identificacion: document.getElementById("id_usuario").value,
        password: document.getElementById("pass_usuario").value,
        repetPass: document.getElementById("repetaPass_usuario").value,
        rolAdmi: document.getElementById("admin").value,
        rolEmp: document.getElementById("empl").value,
    })
    .then((docRef) => {
        alert("Su registro fue exitoso");
    })
    .catch((error) => {
        alert("error en el registro");
    });

}

//VALIDACIÓN DE INGRESO Y CONTRASEÑA DE USUARIO AL SISTEMA
/*const auth = getAuth();
createUserWithEmailAndPassword(auth, identificacion, password)
.then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorCode);

    // ..
});*/


