/*Problema 1

var primo = 2;
var result = true;
for( var i = 2; i<primo; i++){
    if(primo % i === 0){
        result = false;
    }
}
console.log(result);*/

function Invertir(cadena : string){
    var cadenainvertida : String
    cadenainvertida = ""; 
    for (var i= cadena.length -1; i>=0 ; i--){
        cadenainvertida += cadena.charAt(i);
    }
    return cadenainvertida;
} 
console.log(Invertir("this is a sample string"));
