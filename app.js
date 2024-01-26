let numSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numUsuario === numSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('intentar').setAttribute('disabled','true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numUsuario > numSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numMaximo) + 1;
    if (listaNumerosSorteados.length == numMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        document.getElementById('intentar').setAttribute('disabled','true');
        document.getElementById('reiniciar').setAttribute('disabled','true');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numMaximo}`);
    numSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    //Inicializar el número de intentos
    //Generar un nuevo número aleatorio
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();