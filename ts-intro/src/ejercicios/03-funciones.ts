/*
    ===== Código de TypeScript =====
*/

function sumar(a:number,b:number):number{
    return a + b;
}


const sumarFlecha = (a:number,b:number):number => {
    return a + b
}

function multiplicar(num1:number , num2?:number, base:number = 10):number{
    return num1 * base
}

interface PersonajeLOR {
    nombre:string;
    pv:number;
    mostrarHp: () =>void;
}

//Funciones con argumentos de objetos
function curar(personaje:PersonajeLOR, curarX:number):void{
    personaje.pv += curarX;
}

const nuevoPersonaje:PersonajeLOR = {
    nombre: 'Crash ',
    pv: 75,
    mostrarHp(){
        console.log(`Puntos de Vida: ${this.pv}`);
    }
}

curar(nuevoPersonaje, 25);

nuevoPersonaje.mostrarHp()

//  const resultado = multiplicar(10,20);
//  console.log(resultado)


interface PersonajesCrash {
    nombre: string;
    puntosVida: number;
}

const curarp = (personaje: PersonajesCrash, curarX):number| string =>{
    let vidaTotal: number;
    let nombre: string;
    
    nombre = personaje.nombre 
    vidaTotal = personaje.puntosVida + curarX; 
   

    return `Nombre: ${nombre}, Vida Total: ${vidaTotal}`
}

 const Crash:PersonajesCrash = {
    nombre: 'Crash',
    puntosVida: 50
 }

 console.log(curarp(Crash,50))
 
 interface OnePunc {
    name:string;
    poder:string;
    pv: number;
}



const obtenerInformacionn = (personaje: OnePunc):string => {
    let nombre:string;
    let poder: string;
    
    nombre = personaje.name
    poder = personaje.poder

    return `Nombre:${nombre}, Poder: ${poder}`
}

const sumarVidaa = (personaje: OnePunc, vida:number):number =>{
    return  personaje.pv + vida
}



const saitamasss:OnePunc = {
    name: 'saitama',
    poder: 'SuperFuerza',
    pv: 99
}

// console.log(obtenerInformacionn(saitamasss));
// console.log(sumarVidaa(saitamasss, 1));


const sumarVida = (personaje:OnePunc, sumarV:number):number =>{
    let total = 0;
    total = personaje.pv + sumarV;
    return total;
}

const informacionn = (personaje:OnePunc):string => {
    let nombre = '';
    let poder = '';

    nombre = personaje.name;
    poder = personaje.poder;


    return `Nombre Personaje${nombre} Poder: ${poder}`
}

console.log(informacionn(saitamasss));
console.log(sumarVida(saitamasss, 1));

