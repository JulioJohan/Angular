/*
    ===== Código de TypeScript =====
*/

//Encandenamiento Opcional
interface Pasajero  {
    nombre:string;
    hijos?:string[];
}

const pasajero1: Pasajero = {
    nombre:'Johan'
}

const pasajero2:Pasajero = {
    nombre:'xD',
    hijos: ['Karla','Johan']
}

function imprimeHijos (pasajero:Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);