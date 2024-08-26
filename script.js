document.getElementById('encrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let encryptedText = encriptar(text);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let decryptedText = desencriptar(text);
    document.getElementById('output-text').value = decryptedText;
});

function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}
