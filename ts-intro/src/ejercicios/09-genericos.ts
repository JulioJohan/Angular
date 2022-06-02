/*
    ===== Código de TypeScript =====
*/

//T = Tipo generico

function queTipoSoy<T>(argumento: T){
    
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(100);
let soyArrat = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<number>(100);