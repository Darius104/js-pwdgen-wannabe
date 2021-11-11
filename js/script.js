// Area Dichiarazione
const userName = prompt('Come ti chiami ?');
const userSurname = prompt('Il cognome ?');
const userColor = prompt('Colore preferito ?');
// Parte Logica
const userPass = `La password scelta per te è: ${userName}${userSurname}${userColor}21`;
//Output
//Output con Html
document.getElementById('profiloUtente').innerHTML = userPass;
//Output con alert
alert(userPass);