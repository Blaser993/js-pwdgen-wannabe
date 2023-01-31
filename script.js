console.log("hello!")

let nome, cognome, colore, numero



// 1. Chiedi all’utente il suo nome

nome = prompt( "scrivi il tuo nome");
console.log(nome);

// 2. poi chiedi il suo cognome,

cognome = prompt( "scrivi il tuo cognome");
console.log(cognome);
// 3. poi chiedi il suo colore preferito

colore = prompt( "scrivi il tuo colore preferito");
console.log(colore);
// 4. e un numero

numero = prompt( "scrivi un numero");
console.log(numero);
// 5. genera la psw concatenando le variabili

const psw = nome + cognome + colore + numero
console.log(psw);


// 6. Infine scrivi sulla pagina il risultato 
const h1Element = document.getElementById("psw");
h1Element.innerHTML = psw