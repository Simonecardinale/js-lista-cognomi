
// dichiarazione array

var cognomi = ["Verdi", "Bianchi", "Rossi", "Balsano", "Duzioni"];

// prompt e conversione iniziale in maiuscolo

var cognomeUtente = prompt("Qual è il tuo cognome?");
var cognomeUtenteIniziale = cognomeUtente.charAt(0).toUpperCase();
var cognomeUtenteRestante = cognomeUtente.substring(1);
var cognomeUtenteFinale = cognomeUtenteIniziale + cognomeUtenteRestante;

// aggiunzione all'array 

cognomi.push(cognomeUtenteFinale);

// ordine alfabetico e stampa

cognomi.sort();
document.getElementById('cognome_utente').innerHTML = cognomi;

// posizione indice

for( var i = 0; i < cognomi.length; i++) {
    if(cognomi[i] == cognomeUtenteFinale) {
        console.log(i);
    }
}




