/* Dateien, die als Modul geladen werden, sind automatisch im strict mode. */

/* Möchte man Funktionen oder Variablen oder Klassen aus
anderen Dateien nutzen, importiert man sie, in dem man
in den geschweiften Klammern den Namen aufführt, der beim
export verwendet wird.
Wichtig: Importe immer am Anfang der Datei machen, und auf
oberster Ebene, also z.B. nicht in einem if-Block oder einer
Funktion. */
import { shuffle, fahrenheitToCelsius } from './helpers.js';

/* Der Name des default-Exports kann und muss beim importieren frei gewählt
werden. */
import myFunctionName from './helpers.js';

/* 
Man kann mit Komma getrennt auch in einer Zeile den default-Export
importieren und danach benannte Exporte importieren.
Benannte Importe können mit as umbenannt werden.
*/
import mathDefault, { add as plus, minus, magicNumber } from './math.js';
const myName = 'Jonathan';
console.log(myName);

plus(1, 2);
minus(5, 3);
console.log(magicNumber);
mathDefault();

console.log(shuffle([1, 2, 3, 4]));
