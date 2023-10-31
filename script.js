function generarCodigoQR() {
    var url = document.getElementById('linkInput').value;
    if (url !== '') {
        var qr = new QRCode(document.getElementById('qrcode'), {
            text: url,
            width: 128,
            height: 128
        });
    } else {
        alert('Por favor ingrese una URL válida.');
    }
}
