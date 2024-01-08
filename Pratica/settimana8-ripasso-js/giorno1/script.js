//una classe che prenda come parametro opzionale un array di numeri.
// devo controllare che mi arrivi un array o meno 
// Se mi arriva voglio che succeda questo:

// -se un nro e divisibile per 3, stampo Pippo 
// -se un numero e divisibile per 5 stampo pluto
// -se un nro e divisibile sia per 3 che per 5, stampo paperino
// -se un numero non e divisibile per nessuno dei due stampo il nro in formato stringa

// const arrayNumeri = [1, 2, 3, 4, 5];

// class Numeri {
//   constructor (arr = null){
//     if (arr !== null) {
//       this.numbers = arr
//     }
//   }

//   confrontaNumeri() {
//     this.numbers.forEach(element => {
//       if((element % 5 === 0) && (element % 3 === 0)) {
//         console.log('Paperino');
//       }else if(element % 3 === 0){
//         console.log('Pippo')
//       }else if((element % 5 === 0)) {
//         console.log('Pluto')
//       }else {
//         console.log(element.toString())
//       }
//     });
//   }

// }

// const numeri = new Numeri(arrayNumeri);
// if (numeri.hasOwnProperty('numbers')) {
//   numeri.confrontaNumeri();
// }else {
//   console.log('Non ho i numeri')
// }


// numeri.confrontaNumeri(); 

// document.getElementById('button').addEventListener('click', test());

// function test() {
//   //console.log('ciao');  se cosi, questo verra eseguito subito
//   return function() {
//     console.log('ciao'); //se lo metto dentro una funzione, non si triggera la funzione al caricamento, ma solo al click
//     //altra opzione è nell'addEventListener non mettere le parentesi tonde
//   }
// }

console.log('start');

const promise1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise1')
    }, 4000);
  })
}

const promise2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise2')
    }, 2000);
  })
}

const allPromise = async () => {
  const result = await Promise.all([
    promise1(),
    promise2()
  ])
  console.log(result);
}

export{ promise1, promise2, allPromise }