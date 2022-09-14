function guardarAdmin (){
    db.collection("OrdenCompraAdmin").add({
        codigo: document.getElementById("insertCodeOrder__inputA").value,
        producto: document.getElementById("insertproductName__inputA").value,
        valorUnitario: document.getElementById("insertvalueUniOrder__inputA").value,
        cantidad:document.getElementById("insertvaluecantiOrder__inputA").value,
        valorParcial: document.getElementById("insertPartialvalueOrder__inputA").value,
        fechaVenta: document.getElementById("insertdateOrder__inputA").value,
        valorTotal: document.getElementById("productCode").value,

    })
    .then((docRef) => {
        alert("Registro de venta exitosa")
    })
    .catch((error) => {
        alert("Error en el registro")
    });


}