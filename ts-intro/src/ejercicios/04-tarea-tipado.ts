/*
    ===== Código de TypeScript =====
*/


interface SuperHero {
    nombre:string;
    edad: number; 
    direccion: Direccion;
    mostrarDireccion:() => string


}
interface Direccion {
    calle:string;
    pais:string;
    ciudad:string;
    
}
const superHeroe:SuperHero = {
    nombre: 'spiderman',
    edad: 20,
    direccion: {
        calle:'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion():string{
        return `Nombre SuperHeroe: ${this.nombre} Ciudad:${this.direccion.ciudad} Pais: ${this.direccion.pais}`
    }
   
}

const direccion = superHeroe.mostrarDireccion()
console.log(direccion)