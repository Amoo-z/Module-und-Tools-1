/* NPM-Module werden ohne Pfad (nur mit Modulname) importiert,
üblicherweise vor den selbstgeschriebenen Modulen. (Auch die
Dateiendung fällt weg. ) */
//import { say } from 'cowsay';

import length from 'length.js';

/* Selbstgeschriebene Module werden normal mit Pfadangabe importiert,
man kann nur auf Wunsch die Dateiendung weglassen.
Achtung: Kein gültiger JavaScript-Syntax, funktioniert ohne Dateiendung
nur, wenn man einen Bundler nutzt.
*/
import { add } from './math';

add(2, 3);

//console.log(say({ text: 'grazing in the browser' }));
console.log(length(100, 'cm').to('ft'));

function unused() {
  console.log('Niemand braucht mich!');
}

const person = {
  name: 'Jonathan',
};

console.log(person.age ?? 'Alter unbekannt');

const names = ['JS', 'CSS', 'HTML', 'TypeScript'];

console.log(names.at(-1));
