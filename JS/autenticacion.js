//CAPTURA DE DATOS PARA LOGIN

    const auth = firebase.auth(); //con este comando le digo a firebase que me traiga unos datos para autenticación
    const signupForm = document.getElementById("formularioInscripcion");

    signupForm.addEventListener("submit",(eventoReinicio) => {
       eventoReinicio.preventDefault();//por defecto los formularios reinician la página, pero con esta línea se bloquea ese reinicio
       
        const email= document.getElementById("email_usuario").value;
        const password= document.getElementById("pass_usuario").value;
        
        auth
        .createUserWithEmailAndPassword(email, password)

        .then(userCredential => {

            console.log("en autenticación"); //si este mensaje se muestra en consola, significa que se ejecutó el método
        })
    });


    //VALIDACIÓN DE INGRESO Y CONTRASEÑA DE USUARIO AL SISTEMA

    var formulario_ingreso = document.getElementById("ingreso-plataforma");

    formulario_ingreso.addEventListener("a", e => {

        const email= document.getElementById("ingreso-plataforma__email").value;
        const password= document.getElementById("ingreso-plataforma__pass").value;
        console.log("email, password");

    })