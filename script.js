// var myName; // hoisting
// function myFunction() { ... } // almacena la referencia de la funcion

console.log(myName);

// let y const vs var
// hoisting es un proceso (aplica para var y para functions) que hace una pre-lectura del codigo, busca todas estas variables o funciones y las sube al inicop del codigo. (en caso de var, sin su valor)

// console.log(myAge) // no puedo acceder antes de crearla

let myAge = 46;
console.log(myAge);

// let myAge = 70; // no puedes porque ya la cajita fue creada

var myName = "jorge";
console.log(myName);

// 2000 lineas de codigo

var myName = "Patricia";
console.log(myName);

myFunction();

function myFunction() {
  console.log("patata");
}

myFunction();

function myFunction() {
  console.log("tomate");
}

myFunction();

// funciones de ES6+ se crear con expresion o flecha no ocurre hoisting (let o const)
// no podemos invocarlas antes
// no podemos crearlas con mismo nombre

const nombreDeFuncion1 = function () {};

const nombreDeFuncion2 = () => {
  console.log("funcion de flecha");
};

nombreDeFuncion2();

// SCOPES => secciones donde ejecutamos codigo

// 1. Scope global

let nuevaVariable = "patata"; // esto fue declarado en el scope global. ES ACCESIBLE EN CUALQUIER LUGAR DE MI CODIGO.

function functionTest() {
  if (true) {
    for (let i = 0; i < 5; i++) {
      console.log(nuevaVariable);
    }
  }
}

functionTest();

// 2. Scope de bloque. cada vez que escribimos {} y hacemos codigo dentro (EXCEPTO en funciones), estamos encapsulando nuestras variables
// condicionales, bucles, switch, abriendo scope manualmente

if (true) {
  let myString1 = "variable creada con let en scope de bloque";
  var myString2 = "variable creada con var en scope de bloque"; // no hacer
  myString3 = "variable creada sin declarar en scope de bloque"; // NO HACER
}

// console.log(myString1) // no puedo acceder fuera del scope de bloque
console.log(myString2); // acceso global
console.log(myString3); // acceso global

// 3. Scope de funciones

function functionTestScope() {
  console.log(myVariable2); // ocurre hoisting dentro de la funcion

  let myVariable1 = "variable creada con let en scope de function";
  var myVariable2 = "variable creada con var en scope de function"; // no hacer
  // hoisting ocurre dentro de la funcion
  myVariable3 = "variable creada sin declarar en scope de function"; // NO HACER
}

functionTestScope();

// console.log(myVariable1) // no puedo porque fue creada dentro de funcion
// console.log(myVariable2) // no puedo porque fue creada dentro de funcion
console.log(myVariable3); // se crea como variable global

// Conclusiones

// NUNCA USAR var ni crear variables sin declarar
// considerar hoisting al crear funciones con palabra funcion o simplemente usar solo funciones de flecha
// Estos conceptos son preguntas tecnicas comunes, estudiar un poco para entrevistar tecnicas.

// OOP

let string = "hola";
console.log(string);

let string2 = String("hola");
console.log(string2);

let string3 = new String("hola");
console.log(string3);

// Objeto complejo y una palabra reservada "this"

const person = {
  name: {
    firstName: "Alice",
    lastName: "Liddell",
  },
  location: "Pais de las Maravillas",
  friends: [
    "Sombrero Loco",
    "Gato Chesire",
    "Liebre de Marzo",
    "Conejo Blanco",
    "Humpy Dumpty",
  ],
  saludar() {
    console.log(this); // this dentro de objetos apunta al objeto en el cual se esta usando
    // return `hola mi nombre es ${person.name.firstName}`
    // muchas veces JS mueve los objetos a diferentes nombres de variables (person)
    return `hola mi nombre es ${this.name.firstName} estoy en ${this.location}`;
  },
  tamañoActual() {
    // de forma aleatoria
    let randomNumber = Math.random(); // 0 - 0.9999999999
    console.log(randomNumber);

    if (randomNumber < 0.5) {
      // 50% "Alicia es grande"
      return `${this.name.firstName} es grande`;
    } else {
      // 50% "Alicia es pequeña"
      return `${this.name.firstName} es pequeña`;
    }
  },
  desearFelizNoCumpleaños() {
    // return `Feliz feliz no cumpleaños a ALGUIEN aleatorio`
    let friendNumber = Math.random() * this.friends.length; // 0 - 4.9999999
    let friendIndex = Math.floor(friendNumber); // 0 - 4
    console.log(friendIndex);
    return `Feliz feliz no cumpleaños a ${this.friends[friendIndex]}`;
  },
};

// console.log(this) // en scope global this apunta a la base del código JS donde estan todos los metodos globales

person.name.firstName = "Alicia";
console.log(person);
console.log(person.saludar());
console.log(person.tamañoActual());
console.log(person.desearFelizNoCumpleaños());

// CLASSES => planos, blueprints, plantillas, templates para fabricar objetos

/*
{
  name: "...",
  identity: "...",
  isEvil: true/false
}
*/

// todas las clases escritas en PascalCasing
class Hero {
  // propiedades
  constructor(nameParam, identityParam, num) {
    // con this hacemos referencia al objeto que será creado
    this.name = nameParam;
    this.identity = identityParam;
    // opcion de crear propiedades comunes entre objetos
    this.isEvil = false;
    // this.numArr = [];
    // for (let i = 0; i < num; i++) {
    //   this.numArr.push(i)
    // }
  }

  // metodos
  revelarIdentidadSecreta(aQuien) {
    // console.log(aQuien)
    return `Hola ${aQuien} Soy ${this.name} y mi identidad secreta es ${this.identity} `
  }

  volverseMaloso() {
    console.log(this)
    this.isEvil = true;
    return `${this.name} ahora es malvado! MUAHYAHAHAHAHAA`
  }

}

let hero1 = new Hero("Iron Man", "Tony Stark", 10); // genera un nuevo objeto basado la clase Hero
console.log(hero1);
console.log(hero1.revelarIdentidadSecreta("mundo"))
console.log(hero1.volverseMaloso())
console.log(hero1);



let hero2 = new Hero("Black Widow", "Natasha Romanoff", 100);
console.log(hero2);
console.log(hero2.revelarIdentidadSecreta("amigos"));

let heroesArr = [
  new Hero("Iron Man", "Tony Stark"),
  new Hero("Black Widow", "Natasha Romanoff"),
  new Hero("Hawkeye", "Clint Barton"),
  new Hero("Batman", "Bruce Wayne"),
]

console.log(heroesArr)

for (let i = 0; i < heroesArr.length; i++) {
  console.log(heroesArr[i].revelarIdentidadSecreta("mundo"))
}


// propiedad adicional superPower
// metodo adicional attack con superpoder

// extends nos permite indicar que una clase es hija de otra clase
// HEREDA todos los metodos y propiedades de la clase padre

class SuperHero extends Hero {

  constructor(name, identity, superPower) {
    // si queremos agregar propiedades adicionales a la subclase, tenemos que crear el constructor con los parametros completos
    super(name, identity) // decir que superHero recibe dos parametros y los usa en la plantilla padre Hero

    this.superPower = superPower

  }

  
  userSuperPower(target) {
    console.log(target)
    return `${this.name} esta usando el poder de ${this.superPower} contra ${target.name}`
  }


}


const superHero1 = new SuperHero("Spiderman", "Peter Parker", "Lanzar Telarañas")
console.log(superHero1)
console.log(superHero1.userSuperPower( hero1 ))
console.log(superHero1.userSuperPower( hero2 ))

const superHero2 = new SuperHero("Wolverine", "Logan", "Atacar con garras")
console.log(superHero2)