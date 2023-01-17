const frutas = ["laranja", "limão", "uva"];

/* Exercicio 1 */

const fruta1 = document.getElementById("fruta-1");
fruta1.innerHTML = frutas[0];

const fruta2 = document.getElementById("fruta-2");
fruta2.innerHTML = frutas[1];

const fruta3 = document.getElementById("fruta-3");
fruta3.innerHTML = frutas[2];

/* Exercicio 3 */

let userFruit = document.getElementById("userfruit");

const adicionarFruta = function () {
    frutas.push(userFruit.value);
    const fruta4 = document.getElementById("fruta-4");
    fruta4.innerHTML = frutas[frutas.length - 1];
    userFruit.value = " ";
};
