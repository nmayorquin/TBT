function guardarOrdenCompraEmpl (){
    db.collection("ordenCompraEmpl").add({
        codigoE: document.getElementById("insertCodeOrder__input").value,
        productoE: document.getElementById("insertproductName__input").value,
        valorUnitarioE: document.getElementById("insertvalueUniOrder__input").value,
        cantidadE:document.getElementById("insertvaluecantiOrder__input").value,
        valorParcialE: document.getElementById("insertPartialvalueOrder__input").value,
        fechaVentaE: document.getElementById("insertdateOrder__input").value,
        valorTotalE: document.getElementById("productCode").value
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });

}
