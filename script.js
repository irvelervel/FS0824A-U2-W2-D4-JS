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
