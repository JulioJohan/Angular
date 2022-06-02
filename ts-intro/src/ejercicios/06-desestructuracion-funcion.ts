/*
    ===== Código de TypeScript =====
*/


//Desestructuracion de argumentos

export interface Producto {
    desc:string;
    precio:number;
}


const telefono: Producto = {
   desc:'Nokia A1 ',
   precio:150   
}

const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 350
}

function calcula(productos:Producto[]):[number, number]{
    let total = 0;

    //Desestructuracion en funciones
    productos.forEach(({precio}) => {
        total += precio;
    })
    return [total, total * 0.15];
}

//Desestructurando el arreglo para obtener las 2 variables
const articuloss:Producto[] = [telefono, tableta]

const [ isvv] = calcula(articuloss);

console.log('Total',isvv);
console.log('ISV',isvv);


export function calcularISV(productos:Producto[]):[number,number]{
    let total = 0;
    //Desestructuracion en funciones
    productos.forEach(({precio}) => {
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos:Producto[] = [telefono,tableta];
const [total, isv] = calcularISV(articulos);

console.log('total',total);
console.log('isv',isv);




