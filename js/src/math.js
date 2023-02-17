export function add(a, b) {
  console.log('Addieren!');
  return a + b;
}

function subtract(a, b) {
  console.log('Subtrahieren!');
  return a - b;
}

function calculate() {
  console.log('Ergebnis!');
}

const magicNumber = 42;

/* Alternativ dazu, direkt vor Funktionen oder Variablen export
zu schreiben, kann man die benannten Exporte am Ende der Datei
auch in geschweiften Dateien aufführen.
Optional kann man den Export auch mit as umbenennen. */
export { subtract as minus, magicNumber };

export default calculate;
