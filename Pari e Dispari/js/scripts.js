let makeAchoise;
let userNum;

do {
    makeAchoise = prompt("Scegli pari o dispari:").toLowerCase();

    if (makeAchoise != 'pari' && makeAchoise != 'dispari') {
        alert('Mmh hai scritto male, riprova!');
    }

} while (makeAchoise != 'pari' && makeAchoise != 'dispari')
alert ("Bene, hai scelto: " + makeAchoise);

do {
    userNum = parseInt(prompt("Bene, ora scrivi un numero da 1 a 5:"));

    if ((isNaN(userNum)) || (userNum < 1) || (userNum > 5)) {
        alert("Non va bene, riprova!")
    }

} while ((isNaN(userNum)) || (userNum < 1) || (userNum > 5));

alert ("Ok bene, hai scelto il numero: " + userNum);

function randomNumber (min, max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

let myNum = randomNumber(1, 5);

let userSum = myNum + userNum;

function isEven (num) {
    return num % 2 == 0;
}

// Ricapitolando
console.log('Il giocatore ha scelto: ', makeAchoise);
console.log('Ed il numero: ', userNum);
console.log('Numero casuale Computer: ', myNum);
console.log('Somma: ', userSum);


if ((isEven(userSum) && makeAchoise == 'pari') || (!(isEven(userSum)) && makeAchoise == 'dispari')) {
    console.log("Hai vinto, complimenti!");
    alert ("Hai vinto, complimenti!");

}
else {
    console.log("Hai perso, ritenta sarai più fortunato!");
    alert ("Hai perso, ritenta sarai più fortunato!");
}

