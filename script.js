function generarCodigoQR() {
    var url = document.getElementById('linkInput').value;
    if (url !== '') {
        JsBarcode("#barcode", url, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 40,
        });
    } else {
        alert('Por favor ingrese una URL válida.');
    }
}

