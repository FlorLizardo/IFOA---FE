//Esercizio 1

/*Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:- firstName- lastName- age- location Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto. Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.*/

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  getUtente() {
    console.log(`Utente: ${this.firstName} ${this.lastName}, ${this.age} anni, proveniente di ${this.location}`);
  }

  confrontoEta(user1) {
    if(user1.age > this.age) {
      return `${user1.firstName} è più vecchio`;
    }else if(this.age > user1.age){
      return `${this.firstName} è più vecchio`;
    }else {
      return `${user1.firstName} e ${this.firstName} hanno la stessa età`
    }
  }
}

utente1 = new User('Rogelio', 'Petri', 21, 'Maldivas');
utente1.getUtente();

utente2 = new User('Marcelo', 'Rossi', 30, 'Albania');
utente2.getUtente();

console.log(utente1.confrontoEta(utente2)); 