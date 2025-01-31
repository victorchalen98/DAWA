function botonClick(value) {
    document.getElementById('resultado').value += value;
}

function calcular() {
    let display = document.getElementById('resultado');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
