
//VALIDACIÓN DE INGRESO Y CONTRASEÑA DE USUARIO AL SISTEMA

const auth = firebase.auth(); //con este comando le digo a firebase que me traiga unos datos para autenticación
    const signupForm = document.getElementById("formularioInscripcion");

    signupForm.addEventListener("submit",(eventoReinicio) => {
       eventoReinicio.preventDefault();//por defecto los formularios reinician la página, pero con esta línea se bloquea ese reinicio
       
        const email= document.getElementById("email_usuario").value;
        const password= document.getElementById("pass_usuario").value;
        
        auth
        .createUserWithEmailAndPassword(email, password)

        .then(userCredential => {

            console.log("en autenticación");
        })
    
    });

//función para formulario de index

function guardar (){
    db.collection("usuarios").add({
        nombres:document.getElementById("nombre-apellido_usuario").value,
        //email: document.getElementById("email_usuario").value,
        identificacion: document.getElementById("id_usuario").value,
        //password: document.getElementById("pass_usuario").value,
        repetPass: document.getElementById("repetaPass_usuario").value,
        /*rolAdmi: document.getElementById("admin").value,
        rolEmp: document.getElementById("empl").value,*/
    })
    .then((docRef) => {
        alert("Su registro fue exitoso");
    })
    .catch((error) => {
        alert("error en el registro");
    });
}



