//función para guardar datos de producto

function guardarProduct(nombreProducto, codProducto, tipoProducto, descProducto, valorProducto){
    return db.collection("guardarProducto").add({
        nameProduct: nombreProducto, 
        codeProduct: codProducto, 
        typeProduct: tipoProducto, 
        discountProduct: descProducto,
        valueProduct: valorProducto,
    })
    .then((docRef) => {
        alert("Su registro de producto fue exitoso");
    })
    .catch((error) => {
        alert("error en el registro");
    });
}

        const nombre_producto = document.getElementById("contenedor-registroProducto__nombre");
        const codigo_producto= document.getElementById("contenedor-registroProducto__codigo");
        const tipo_producto= document.getElementById("contenedor-registroProducto__tipo");
        const descripcion_producto= document.getElementById("contenedor-registroProducto__descr");
        const valorProducto_producto= document.getElementById("contenedor-registroProducto__valor");

        const button_guardar_producto = document.getElementById("guardarProducto__eventoBotonUno");

        button_guardar_producto.addEventListener("click", function(){
            let nombre__producto = nombre_producto.value;
            let codigo__producto = codigo_producto.value;
            let tipo__producto = tipo_producto.value;
            let descripcion__producto = descripcion_producto.value;
            let valorProducto__producto = valorProducto_producto.value;

            guardarProduct(nombre__producto, codigo__producto, tipo__producto, descripcion__producto, valorProducto__producto).then((docRef) => {
                alert("Su registro fue exitoso");
            }).catch(function(error){
                alert("error en el registro");

            });
        })