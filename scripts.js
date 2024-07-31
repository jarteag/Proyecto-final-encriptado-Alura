// Función para ajustar automáticamente la altura del textarea
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Función para encriptar texto
function encryptText(text) {
    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, letter => encryptionKeys[letter]);
}

// Función para desencriptar texto
function decryptText(text) {
    const decryptionKeys = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, encrypted => decryptionKeys[encrypted]);
}

// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Asignar funciones a los botones
document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('output-text').innerText = encryptedText;
    document.getElementById('input-description').innerText = '';
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('output-text').innerText = decryptedText;
    document.getElementById('input-description').innerText = '';
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text').innerText;
    copyToClipboard(outputText);
});
