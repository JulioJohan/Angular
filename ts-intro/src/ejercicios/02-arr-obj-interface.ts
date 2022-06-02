/*
    ===== Código de TypeScript =====
*/

//Array
let habilidades:string[] = ['Bash', 'Counter' ,'Healing'];




interface Personaje{
    nombre:string,
    hp:number,
    habilidades: string[],
    puebloNatal?: string,
}



const personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter','Healing'],

}

personaje.puebloNatal = 'Pueblo '
console.table(personaje)


habilidades.push('Run')
//Creacion de interfaces,types y objetos    

type Avengers ={
    nombre:string
    nombreReal:string
}


let spiderman:Avengers = {
    nombre: 'spiderman',
    nombreReal: 'Peter Parker'
}

interface OnePunch {
    nombre:string;
    recompensa: number;
}

let zoro:OnePunch = {
    nombre:'Zoro',
    recompensa: 20000
}
console.log(zoro.nombre)
console.log(spiderman.nombre)