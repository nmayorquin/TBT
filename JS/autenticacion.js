//CAPTURA DE DATOS PARA LOGIN


    const signupForm = document.getElementById("formularioInscripcion");

    signupForm.addEventListener("submit",(eventoReinicio) => {
       eventoReinicio.preventDefault();//por defecto los formularios reinician la página, pero con esta línea se bloquea ese reinicio
       
        const email= document.getElementById("email_usuario").value;
        const password= document.getElementById("pass_usuario").value;
        
        auth
        .createUserWithEmailAndPassword(email, password) //se crea un usuario en un documento con usuario y contraseña

        .then(userCredential => {

            alert("Su registro ha sido guardado con éxito"); //si este mensaje se muestra, significa que se ejecutó el método
        })
    });


    //AUTENTICACIÓN

    //VALIDACIÓN DE INGRESO Y CONTRASEÑA DE USUARIO AL SISTEMA

    const formulario_ingreso = document.getElementById("ingreso-plataforma");

    formulario_ingreso.addEventListener("submit", (eventoIngreso) => {
        eventoIngreso.preventDefault();

        const email= document.getElementById("ingreso-plataforma__email").value;
        const password= document.getElementById("ingreso-plataforma__pass").value;

        auth.
        signInWithEmailAndPassword (email, password) //se crea un usuario en un documento con usuario y contraseña

        .then(userCredential => {

            console.log("ingreso"); //si este mensaje se muestra, significa que se ejecutó el método
        })
    })

