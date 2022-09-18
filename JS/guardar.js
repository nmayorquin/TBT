const database = firebase.database().ref("empleados");
document.getElementById("boton__agregarE").addEventListener("click", () =>{
    var agregarEmployee__nombreYapellido = document.getElementById("agregarE__nombre").value;
    var agregarEmployee__id = document.getElementById("agregarE__id").value;
    var agregarEmployee__correo = document.getElementById("agregarE__email").value;
    var agregarEmployee__pass = document.getElementById("agregarE__pass").value;
    var agregarEmployee__Repetpass= document.getElementById("agregarE__Repetpass").value;
});

/*




/*
/*VARIABLES PARA GUARDAR DATOS
    var agregarEmployee__nombreYapellido = document.getElementById("agregarE__nombre");
    var agregarEmployee__id = document.getElementById("agregarE__id");
    var agregarEmployee__correo = document.getElementById("agregarE__email");
    var agregarEmployee__pass = document.getElementById("agregarE__pass");
    var agregarEmployee__Repetpass= document.getElementById("agregarE__Repetpass");
*/ 

/*VARIABLES PARA FUNCIONES CON BOTONES 

var boton__verEmployee = document.getElementById("boton__verE");
var boton__agregarEmployee = document.getElementById("boton__agregarE");
var boton__updateEmployee = document.getElementById("boton__updateE");
var boton__deleteEmployee = document.getElementById("boton__deleteE");*/


/*con esta función se ingresan los datos a firebase
function insertarDatos(){
    setInterval(ref(database, "empleados/"+ agregarEmployee__id.value), {
        nombreYapellidoEmpleado: agregarEmployee__nombreYapellido.value,
        identificacion: agregarEmployee__id.value,
        correo: agregarEmployee__correo.value,
        password: agregarEmployee__pass.value,
        repetPass: agregarEmployee__Repetpass.value  
    })
    .then((docRef) => {
        alert("Su registro fue exitoso");
    })
    .catch((error) => {
        alert("error en el registro"+error);
    });
}*/ 

/*darle funcionalidad al boton insertar datos 
    boton__agregarEmployee.addEventListener("click", insertarDatos);*/






/*

function enviarEmail(){
    
const user = firebase.auth().currentUser;
user.sendEmailVerification().then(function(){
    console.log("enviando correo")

}).catch(function(error){
    console.log(error);
});
}

*/


//función para formulario de index
/*
function guardar (){
    db.collection("usuarios").add({
        nombres:document.getElementById("nombre-apellido_usuario").value,
        //email: document.getElementById("email_usuario").value,
        identificacion: document.getElementById("id_usuario").value,
        //password: document.getElementById("pass_usuario").value,
        repetPass: document.getElementById("repetaPass_usuario").value,
        /*rolAdmi: document.getElementById("admin").value,
        rolEmp: document.getElementById("empl").value,*/
    /*})
    .then((docRef) => {
        alert("Su registro fue exitoso");
    })
    .catch((error) => {
        alert("error en el registro");
    });
}

*/

