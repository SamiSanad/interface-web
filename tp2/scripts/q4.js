/**
 * Question 4 - Manipulation du DOM
 * Navigation, Insertion et Clonage
 */

/**
 * Initialise toutes les fonctionnalités de la page
 */
function initialiser() {
    // TODO: Étape 1 - Navigation entre les nœuds
    // Récupérez #fruits et #out
    const fruits = document.querySelector("#fruits");
    const out = document.querySelector("#out");
    // Utilisez firstElementChild, lastElementChild, children[0].nextElementSibling
    const premier = fruits.firstElementChild;
    const dernier = fruits.lastElementChild;
    const aprPremier = fruits.children[0].nextElementSibling;
    // Affichez : "Premier : X | Dernier : Y | Après le 1er : Z"
    out.textContent = "Premier : " + premier.textContent + " | Dernier : " + dernier.textContent + " | Après le 1er : " + aprPremier.textContent;

    // TODO: Étape 2 - Création et insertion d'éléments
    const zone = document.querySelector("#zone");
    const ajouterEntete = document.querySelector("#addHead");
    const ajouterEnfin = document.querySelector("#addTail");
    // Au clic sur #addHead, créez un <p> avec "(tête)" et utilisez prepend()
    ajouterEntete.addEventListener("click", () => {
        const tete = document.createElement("p");
        tete.textContent = "(tête)";

        zone.prepend(tete);
    })
    // Au clic sur #addTail, créez un <p> avec "(fin)" et utilisez append()
    ajouterEnfin.addEventListener("click", () => {
        const fin = document.createElement("p");
        fin.textContent = "(fin)";

        zone.append(fin);
    })

    // TODO: Étape 3 - Clonage, remplacement et suppression
    const cloner = document.querySelector("#cloner");
    const remplacer = document.querySelector("#remplacer");
    const vider = document.querySelector("#vider");
    
    // Au clic sur #cloner, clonez le .card avec cloneNode(true), modifiez son texte et ajoutez-le
    const carte = document.querySelector(".card");
    const cartes = document.querySelector("#cards");
    let compteurCard = 1;
    cloner.addEventListener("click", () => {
        const nouvCarte = carte.cloneNode(true);
        nouvCarte.textContent = "Card #" + compteurCard++;
        cartes.append(nouvCarte);
    })
    // Au clic sur #remplacer, remplacez la première .card avec replaceWith()
    remplacer.addEventListener("click", () => {
        const carteRempl = document.createElement("div")
        carteRempl.classList.add("card");
        carteRempl.textContent = "Remplacement";
        cartes.firstElementChild.replaceWith(carteRempl);
    })
    // Au clic sur #vider, supprimez toutes les .card avec remove()
    vider.addEventListener("click", () => {
        const enfants = cartes.children;
        while (enfants.length > 0) {
            enfants[0].remove();
        }
    }) 
    // TODO: Étape 4 - Insertion à une position donnée
    // Au clic sur #ins2, créez un <li> "Étape 1.5" et insérez-le avant steps.children[1] avec before()
    const ins2 = document.querySelector("#ins2");
    const steps = document.querySelector("#steps");

    ins2.addEventListener("click", () => {
        const etape1Point5 = document.createElement("li");
        etape1Point5.textContent = "Étape 1.5";
        steps.children[1].before(etape1Point5);
    })
   
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
