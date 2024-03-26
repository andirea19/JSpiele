/*Simple Interaktion mit dem Benutzer:

Ausgabe mit alert(), Eingabe mit prompt(), Ja/Nein-Frage mit confirm()
*/

// Zufallszahl generieren - zw. 1 u 100
let randomNumber = Math.floor(Math.random() * 100) + 1; 

// Spielvariablen
let versuch = 0;
let raten;

// Spielschleife
while (raten !== randomNumber) {
  versuch++;
 
  // Benutzereingabe
  raten = parseInt(prompt("Bitte gib eine Zahl zwischen 1 und 100 ein:"));

  if (typeof raten !== "randomNumber") {
    alert("Bitte gib eine Zahl ein!");
    return; // Eingabe abbrechen
  }

  //nan

  if (isNaN(raten)) {
    alert("Bitte gib eine Zahl ein!");
    return; // Eingabe abbrechen
  }
  
  // Ausgabe
  if (raten === randomNumber) {
    alert(`Gratulation! Du hast die Zahl in ${versuch} Versuchen erraten.`);
  } else if (raten < randomNumber) {
    alert("Deine Zahl ist zu niedrig.");
  } else {
    alert("Deine Zahl ist zu hoch.");
  }
}
