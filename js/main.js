// IL PROGRAMMA CHIEDE ALL'UTENTE IL NUMERO DI KM
const numKm = prompt('Quanti km durerà il viaggio?');
console.log(numKm);

// IL PROGRAMMA VUOLE CONOSCERE L'ETA DEL PASSEGGERO
const age = prompt('Quanti anni hai?');
console.log(age);

// CALCOLIAMO IL PREZZO DEL BIGLIETTO CONSIDERATO CHE COSTA 0.21$ AL KM
const ticketPrice = numKm * 0.21
console.log(ticketPrice);

// PONIAMO LE CONDIZIONI PER I MINORENNI CHE HANNO DIRITTO AD UNO SCONTO DEL 20% E PER GLI OVER 65 CHE HANNO UNO SCONTO DEL 40%
if (age < 18) {
    currentPrice1 = ticketPrice - ((ticketPrice * 20) / 100);
}
else (age > 65); {
    currentPrice2 = ticketPrice - ((ticketPrice * 40) / 100);
};


console.log(currentPrice1, currentPrice2);