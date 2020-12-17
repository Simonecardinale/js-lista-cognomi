
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


var retry = document.getElementById('restart');retry.addEventListener('click', function() {
    cognomeUtente = prompt("Qual è il tuo cognome?");

    var cognomeUtenteIniziale = cognomeUtente.charAt(0).toUpperCase();
    var cognomeUtenteRestante = cognomeUtente.substring(1);
    var cognomeUtenteFinale = cognomeUtenteIniziale + cognomeUtenteRestante;

    // aggiunzione all'array 

    cognomi.push(cognomeUtenteFinale);

    // ordine alfabetico e stampa

    cognomi.sort();
    document.getElementById('cognome_utente').innerHTML = cognomi;
    }

);

// posizione indice

var index = document.getElementById('indice'); index.addEventListener('click', function () {
    var ricerca = prompt("inserisci il cognome da cercare");

    var ricercaIniziale = ricerca.charAt(0).toUpperCase();
    var ricercaRestante = ricerca.substring(1);
    var ricercaFinale = ricercaIniziale + ricercaRestante;

    for( var i = 0; i < cognomi.length; i++) {
        if(cognomi[i] == ricercaFinale) {
            document.getElementById('position').innerHTML += i + 1;
        }
    }

}
);












