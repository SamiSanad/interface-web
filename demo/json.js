/*let monJson = '{"nom":"Marc-Olivier","cours":["3E5", "5H6"]}' 

let monObjetJs = {
    nom:"Marc-Olivier",
    cours:["3E5","5H6"],
    maFct(){
        console.log('la fct');
    }
}

// JS ver JSON
console.log(monObjetJs);

console.log(JSON.stringify(monObjetJs));

// JSON vers JS


let monObjJsConverti = JSON.parse(monJson);

alert(monObjJsConverti.cours);

*/
/*
let monObjetJs2 = {
    nom:"Tremblay",
    cours:["3E5","5H6"],
    maFct(){
        console.log('la fct');
    }
}

let monJson2 = JSON.stringify(monObjetJs2);
console
*/
try {
    const nouvNombre = convertirNombre('3');
    console.log('monNombre' ,nouvNombre);
} catch (error) {
    console.error("JSON invalide", error.message);
} finally {
    console.log("finally c'est fini!!");
}