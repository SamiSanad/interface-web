/**
 * Question 5 - Données numériques et gestion du temps
 * Compteur avec setInterval et clearInterval
 */

// TODO: Déclarez les variables nécessaires (éléments DOM, id de l'interval, valeur du compteur)

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#n, #start, #stop, #double)
    const n = document.querySelector("#n");
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    const double = document.querySelector("#double");
    
    // TODO: Au clic sur Start
    // - Vérifier qu'un interval n'est pas déjà en cours
    // - Lancer setInterval qui incrémente la valeur chaque seconde
    // - Afficher la nouvelle valeur dans #n
    let enCours = false;
    let valeur = 0;
    let intervalId = null;
    start.addEventListener("click", () => {
        if(enCours === false) {
            enCours = true;
            intervalId = setInterval(() => {
                valeur++;
                n.textContent = valeur;
            }, 1000);
        }
    }) 

    // TODO: Au clic sur Stop
    // - Utiliser clearInterval pour arrêter l'interval
    // - Réinitialiser l'id de l'interval
    stop.addEventListener("click", () => {
        enCours = false;
        clearInterval(intervalId);
        intervalId = null;
    })
    
    // TODO: Bonus - Au clic sur ×2
    // - Multiplier la valeur actuelle par 2
    // - Afficher la nouvelle valeur

    double.addEventListener("click", () => {
        valeur = valeur*2;
        n.textContent = valeur;
    })
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
