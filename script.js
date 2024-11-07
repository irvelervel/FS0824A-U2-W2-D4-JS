// VARIABILI
// una variabile è un "contenitore" per un valore
// in JS si inizializzano con le parole "let" e "const"

let myVar = 100
myVar = 50

const fixed = 'STEFANO'
// fixed = 'EPICODE' // <-- errore!

let dontKnow
//
dontKnow = 'BOH'

console.log(dontKnow) // stampa il valore della variabile in console

// TIPI DI DATO PRIMITIVI
// string -> 'ciao'
// number -> 100
// boolean -> true/false
// undefined -> undefined
// null -> null

// TIPI DI DATO "COMPLESSI"
// array -> [5, 10, 100]
// oggetti -> {key: value,}

// JS è un linguaggio "debolmente tipizzato" ("weakly typed")
// è quindi possibile cambiare il tipo di dato di una variabile "in corsa"

// se vogliamo conoscere NON il valore di una variabile, ma il suo tipo
// esiste la keyword "typeof"
console.log(typeof dontKnow) // "string"

let MY_URL = 'www.epicode.com'
console.log(MY_URL.length) // 15
console.log(MY_URL.toUpperCase()) // "WWW.EPICODE.COM"
console.log(MY_URL.slice(0, 3)) // "www"

// ARRAY
// una LISTA di valori, un'unica variabile che però può contenere una infinita
// serie di valori (anche misti)
const myArr = ['stefano', 'antonio']
// gli elementi in un array si distinguono grazie alla loro POSIZIONE
// detto anche INDICE. Negli array in JS si comincia a contare da 0
// quindi 'stefano' ha indice 0, 'antonio' ha indice 1 etc. etc.
// il primo elemento di un array ha indice 0
// l'ultimo elemento di un array ha indice lunghezza-1
console.log(myArr.length) // 2
myArr[0] // 'stefano', il primo elemento
myArr[1] // 'antonio', il secondo (e ultimo) elemento

// operazioni
myArr.push('rachele') // aggiunge un elemento in ultima posizione, incrementando la length
myArr.pop() // rimuove l'ultimo elemento dell'array myArr, ovvero "rachele"
myArr.unshift('patricia') // aggiunge "patricia" ma in prima posizione
myArr.shift() // rimuove il primo elemento dell'array myArr, ovvero "patricia"

console.log(myArr) // l'array è risultato invariato alla fine delle operazioni, in quanto abbiamo sempre cancellato le nostre tracce

// CICLI
// un ciclo è un modo di ripetere una serie di operazioni un numero prestabilito o meno di volte

// un ciclo che viene eseguito un numero NON predeterminato di volte può essere il "while"

// MY_URL inizialmente vale "www.epicode.com"
while (MY_URL !== 'www') {
  // originariamente, MY_URL vale "www.epicode.com"
  console.log(MY_URL)
  MY_URL = MY_URL.slice(0, MY_URL.length - 1) // accorcia MY_URL di un carattere a ogni esecuzione
}

console.log('CICLO WHILE FINITO')

// un ciclo che esegue una serie di operazioni un numero PREFISSATO di volte è il ciclo FOR

for (let i = 0; i < 10; i++) {
  // la i parte da 0 e arriverà fino al 9 (l'ultimo valore < 10)
  // contare da 0 a 9 incrementando di 1 ogni volta ci porta ad avere
  // 10 ESECUZIONI del ciclo (iterazioni)
  console.log('VALORE DI I', i)
}

console.log('PUBBLICITÀ')

for (let i = 10; i > 0; i--) {
  // la i vale da 10 a 1, decrementando di 1 ogni volta
  // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  console.log('VALORE DI I', i)
}

const arrOfNames = ['stefano', 'andrea', 'lorenzo', 'patricia', 'rachele']

for (let i = 0; i < arrOfNames.length; i++) {
  // una i che parte da 0 e arriva fino a 4
  console.log('I VALE', i)
  console.log('UTILIZZANDO I COME INDICE DI ARROFNAMES', arrOfNames[i])
}

const dado = Math.ceil(Math.random() * 6) // 0,000001 * 6 fino a 0,999999 * 6
// 0,000006 - 5,99999999
// 1 - 6
console.log(dado)

arrOfNames.forEach((element, i) => {
  // qui dentro finite tante volte quanto è la lunghezza dell'array
  console.log('ELEMENT', element, i)
})

// map TRASFORMA UN ARRAY IN UN NUOVO ARRAY
const maiuscoli = arrOfNames.map((element) => {
  return element.charAt(0).toUpperCase() + element.slice(1, element.length)
  // 'S' + 'tefano
})

console.log('MAIUSCOLI', maiuscoli)

// filter ritorna una PORZIONE di un array

const lastIsA = arrOfNames.filter((element) => {
  // nei filter per ogni elemento dovete ritornare TRUE o FALSE
  // se tornate TRUE l'elemento FARÀ PARTE di lastIsA, altrimenti no
  // element finisce con 'a' ?
  // element.slice(element.length - 1, element.length)

  let last = element.charAt(element.length - 1) === 'a' // true o false
  if (last) {
    return true
  } else {
    return false
  }
})

console.log('lastIsA', lastIsA)

// OGGETTI
// un oggetto in JS è una rappresentazione di un oggetto della vita reale, fatto da caratteristiche e proprietà

const myComputer = {
  // chiave: valore
  color: 'black',
  screenSize: 15,
  brand: 'Microsoft',
  bello: true,
  os: {
    brand: 'Microsoft',
    version: 11,
  },
  usages: ['play', 'work', 'code'],
}

myComputer.brand // 'Microsoft'
myComputer['bello'] // true

myComputer.age = 2
delete myComputer.bello // rimuovo la proprietà "bello"

myComputer.usages[2]
myComputer.usages[myComputer.usages.length - 1] // tornerebbe sempre l'ULTIMO elemento di usages

// myComputer.usages[myComputer.usages.length - 1] = 'Giuseppe'

myComputer.usages.push('Giuseppe')
// elimino "word"
myComputer.usages.splice(1, 1)
console.log(myComputer)

console.log('KEYS', Object.keys(myComputer)) // ['color', 'screenSize', 'brand', 'os', 'usages]
console.log('VALUES', Object.values(myComputer))

// FUNZIONI
// le funzioni in JS servono per raggruppare del codice sotto un unico blocco di istruzioni, richiamabile attraverso il nome della funzione

const bark = function () {
  console.log('BAUBAU')
  console.log('BAUBAU')
}

bark()
bark()

const greetStudent = function (name) {
  const string = 'Ciao, ' + name + '!'
  //   const string = `Ciao, ${name}!`
  console.log('string', string)
}

greetStudent('Stefano')
greetStudent('Andrea')
greetStudent('Francesco')

const greetStudentTotTimes = function (name, numberOfTimes) {
  for (let i = 0; i < numberOfTimes; i++) {
    console.log(`Ciao, ${name}!`)
  }
}

greetStudentTotTimes('Daniel', 3)
greetStudentTotTimes('Giulio', 5)
