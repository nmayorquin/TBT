//función para guardar datos de producto

function guardarProduct(){
    return db.collection("guardarProducto").add({
        nameProduct: document.getElementById("contenedor-registroProducto__nombre").value,
        codeProduct: document.getElementById("contenedor-registroProducto__codigo").value,
        typeProduct: document.getElementById("contenedor-registroProducto__tipo").value,
        discountProduct: document.getElementById("contenedor-registroProducto__descr").value,
        valueProduct: document.getElementById("contenedor-registroProducto__valor").value,
    })
    .then((docRef) => {
        alert("Su registro de producto fue exitoso");
    })
    .catch((error) => {
        alert("error en el registro");
    });
}
