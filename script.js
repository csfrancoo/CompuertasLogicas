// ==========================
// LAMPARITA AND
// ==========================
function probarAND() {

    let A = Number(document.getElementById("a").value);
    let B = Number(document.getElementById("b").value);

    let salida = A && B;

    mostrarResultado(salida);
}

// ==========================
// LAMPARITA OR
// ==========================
function probarOR() {

    let A = Number(document.getElementById("a").value);
    let B = Number(document.getElementById("b").value);

    let salida = A || B;

    mostrarResultado(salida);
}

// ==========================
// LAMPARITA NOT
// ==========================
function probarNOT() {

    let A = Number(document.getElementById("a").value);

    let salida = !A;

    mostrarResultado(salida);
}

// ==========================
// LAMPARITA NAND
// ==========================
function probarNAND() {

    let A = Number(document.getElementById("a").value);
    let B = Number(document.getElementById("b").value);

    let salida = !(A && B);

    mostrarResultado(salida);
}

// ==========================
// LAMPARITA NOR
// ==========================
function probarNOR() {

    let A = Number(document.getElementById("a").value);
    let B = Number(document.getElementById("b").value);

    let salida = !(A || B);

    mostrarResultado(salida);
}

// ==========================
// LAMPARITA XOR
// ==========================
function probarXOR() {

    let A = Number(document.getElementById("a").value);
    let B = Number(document.getElementById("b").value);

    let salida = (A ^ B);

    mostrarResultado(salida);
}

// ==========================
// LAMPARITA XNOR
// ==========================
function probarXNOR() {

    let A = Number(document.getElementById("a").value);
    let B = Number(document.getElementById("b").value);

    let salida = (A === B);

    mostrarResultado(salida);
}

// ==========================
// FUNCION GENERAL LAMPARITA
// ==========================
function mostrarResultado(salida) {

    const lamparita = document.getElementById("lamparita");
    const resultado = document.getElementById("resultado");

    if (salida == 1 || salida === true) {

        lamparita.innerHTML = "💡";
        resultado.innerHTML = "Salida = 1 → La lamparita está ENCENDIDA.";

    } else {

        lamparita.innerHTML = "⚫";
        resultado.innerHTML = "Salida = 0 → La lamparita está APAGADA.";
    }
}