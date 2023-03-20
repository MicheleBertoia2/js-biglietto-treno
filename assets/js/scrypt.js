
const distanza = prompt('A quanti km dista la tua destinazione?');
const age = prompt('Inserisci età');

let prezzoTicket = Math.ceil(distanza * 0.21); 

if(age<=18){
  prezzoTicket = prezzoTicket -(prezzoTicket*0.20)
}else if(age>=65){
  prezzoTicket = prezzoTicket -(prezzoTicket*0.40)
};

const message = `
  Il totale per il suo biglietto equivale a \u20AC ${prezzoTicket.toFixed(2)}. <br>
  Buon viaggio!
`;

document.getElementById('output').innerHTML = message