// 6.1 Question 2
let age = 15;
if (age >= 13 && age <= 17) {
    console.log('Adolescent');
} else if (age >= 18) {
    console.log('Adulte');
} else {
    console.log('Enfant');
}

// 6.1 Question 3
let jour = 1;
switch (jour) {
    case 1:
        console.log('Lundi');
        break;
    case 5:
        console.log('Vendredi');
        break;
    case 0:
    case 6:
        console.log('Weekend');
        break;
    default:
        console.log('Autre jour');
        break;
}

// 6.1 Question 4
for (let i = 0; i <= 50; i += 5) {
    console.log(i);
}

// 6.1 Question 5
const carre = (n) => n * n;
function appliquerOperation(nombre, fonction) {
    console.log(fonction(nombre));
}

appliquerOperation(4, carre);

// 6.2 Question 1
const livre = {
    titre: 'Le titre',
    auteur: "Otto L'Auteur",
    annee: 9999,
};
console.log(livre.annee);
console.log(livre['annee']);

// 6.2 Question 2
class Auto {
    constructor(marque, couleur, vitesse) {
        this.marque = marque;
        this.couleur = couleur;
        this.vitesse = vitesse;
    }

    accelerer() {
        this.vitesse += 10;
    }
}

const maVoiture = new Auto('Koenigsegg', 'argenté', 300);
maVoiture.accelerer();
maVoiture.accelerer();
console.log(maVoiture.vitesse);

// 6.2 Question 3
let fruits = ['Pomme', 'Banane', 'Orange'];
//fruits.forEach((fruit, index) => {
//    console.log(`${index}: ${fruit}`);
//});
console.log(fruits);
fruits.push('Poire');
//fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
//});
console.log(fruits);
fruits.pop();
//fruits.forEach((fruit, index) => {
//  console.log(`${index}: ${fruit}`);
//});
console.log(fruits);

// 6.2 Question 4
const nombres = [2, 5, 8, 11, 14];

const carres = nombres.map((nombre) => nombre * nombre);
console.log(carres);
const nbPairs = nombres.filter((nombre) => nombre % 2 === 0);
console.log(nbPairs);
const premierSupADix = nombres.find((nombre) => nombre > 10);
console.log(premierSupADix);

// 6.2 Question 5
setTimeout(() => {
    console.log('Bonjour');
}, 2000);

let intervalId = setInterval(() => {
    console.log('Encore là?');
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);

// 6.2 Question 6
const joueur = { nom: 'Jérémie', age: 25, score: 120, niveau: 'avancé' };

const { nom, score } = joueur;
console.log(nom);
console.log(score);

function afficherScore({ nom, score }) {
    console.log(`${nom} a ${score} points`);
}
afficherScore(joueur);

// 6.2 Question 7.1
const inventaireJoueur1 = ['Potion', 'Fusil à pompe', 'Pistolet'];
const inventaireJoueur2 = ['Sniper', 'Potion', 'Pioche'];
const inventaireTotal = [...inventaireJoueur1, ...inventaireJoueur2];

console.log(inventaireTotal);

// 6.2 Question 7.2
const joueur2 = { pseudo: 'NoobMaster', vie: 100, niveau: 5 };
const joueurAmeliore = { ...joueur2, vie: 150, niveau: 6 };

console.log(joueurAmeliore);
