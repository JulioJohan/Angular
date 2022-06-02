/*
    ===== Código de TypeScript =====
*/

import { calcularISV, Producto } from "./06-desestructuracion-funcion"

//Desestructuracion de argumentos




const carritoCompra:Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100
    },
    {
        desc: 'Telefono2',
        precio: 500
    },
]

const [total, isv] = calcularISV(carritoCompra); 

console.log( 'Total', total);
console.log('ISV',isv);