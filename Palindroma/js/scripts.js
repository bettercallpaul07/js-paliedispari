inputString = prompt('Scrivimi una parola, ti farò sapere se è palindroma!')


function isPalindrome(inputString) {

    // trasformiamo la parola tutta in lower case
    let lower = inputString.toLowerCase();
    
    // convertiamo la parola in un array di caratteri
    let characters = lower.split('');

    // utilizziamo la funzione reverse per invertire l'array
    let reversed = characters.reverse();

    // uniamo nuovamente i caratteri in una parola
    let reversedWord = reversed.join('');
    
    // confrontiamo la parola originale con quella invertita
    if (lower === reversedWord) {
        return "Si, la parola è palindroma";
    }

    else {
        return "No, la parola non è palindroma"
    }
}

alert(isPalindrome(inputString));


