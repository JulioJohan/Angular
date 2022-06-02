/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

interface Detalles {
    autor:string;
    anio:number
}

const reproductor:Reproductor = {
    volumen: 90,
    segundo:36,
    cancion: 'La marrana',
    detalles:{
        anio: 2019,
        autor:'El marrono'
    }
}
const { volumen,segundo,cancion, detalles} = reproductor;
const {autor} = detalles;
// const {autor:autorDetalle} = detalles;

// console.log('El volumen actual de: ' ,volumen);
// console.log('El segundo actual de: ',segundo );
// console.log('La cancion actual de: ',cancion);
// console.log('El Autor es : ');

//Desestructarion del arreglo
const dbz:string[] = ['Goku','Vegeta','Trunks'];
const [ , ,p3] = dbz;
console.log('Personaje 1 ', );
console.log('Personaje 2 ', );
console.log('Personaje 3 ', p3);



interface Naruto {
    name:string;
    aldea: string;
}

const naruto:Naruto = {
    name: 'naruto',
    aldea: 'Aldea de la hoja'
}

const {name:nombr, aldea} = naruto;

console.log(`Nombre: ${nombr}`)
console.log(`Aldea: ${aldea}`)


const atackOnTitan: string[] = ['Eren','Mikasa','Armin'];
const [p1,p2,p4] = atackOnTitan;
console.log('Nombre del Personaje',p1 )
console.log('Nombre del Personaje 2',p2)




interface Warzone  {
    nombre:string;
    habilidad: string;
    arma:string;    
}

const ghost:Warzone = {
    nombre: 'Ghost',
    habilidad: 'Tiro Lejano',
    arma: 'ppsh'
}

console.log(ghost.nombre);


const informacionP = (nombre:string): string=>{
    return nombre;
}
