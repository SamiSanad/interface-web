const nombre = 20;

if (nombre >= 0 && nombre<= 100) {
    console.log('valide');
} else {
    console.log('invalide');
}

const mot = prompt('Entrez un mot: ');
const longueurMot = mot.length;

switch (longueurMot) {
    case 1:
        console.log('1 caractère')
        break;
    case 2:
    case 3:
    case 4:
        console.log('2 à 4 caractères')
        break;
    case 5:
        console.log('5 caractères');
        break;
    default:
        console.log('plus de 5 caractères')
        break;
}

for (let multiples = 0; multiples <= 500; multiples += 10) {
    if (multiples !== 0) {
        console.log(multiples);
    }
    
    
}

function calculerAge(anneeNaissance) {
const maintenant = new Date().getFullYear();
  return maintenant - anneeNaissance;
}

console.log(`Votre âge est de ${calculerAge(1990)} ans`);
console.log('âge: ' + calculerAge(1990));


const moi = {
    prenom: 'Abdelmadjid',
    nom: 'Tebboune',
    age: 67,
    jeuVideo: 'Prince of Algeria',
    resume(){
        return this.prenom + ' ' + this.nom + ' ' + this.age + ' ' + this.jeuVideo;
    }
}

console.log(moi.resume());



