/**
 * Question 1 - Convertisseur de température
 * Convertir des degrés Celsius en Fahrenheit
 */

// TODO: Déclarez des variables (nombre, string)
let nombre = 0;
let string = '';

/**
 * Convertit une température de Celsius en Fahrenheit
 * @param {number} celsius - La température en degrés Celsius
 * @returns {number} La température en degrés Fahrenheit
 */
function convertirCelsiusVersfahrenheit(celsius) {
    // TODO: Retourner le résultat de la conversion en utilisant l'expression c*9/5+32
    let calcul = celsius*9/5+32;
    return calcul;
}

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#c, #go, #out)
    // TODO: Au clic sur #go, convertir la valeur de #c et afficher dans #out
    // TODO: Gérer le cas où l'input est vide (afficher "Veuillez entrer une valeur")
    let c = document.querySelector("#c");
    let go = document.querySelector('#go');
    let out = document.querySelector('#out');
    go.addEventListener('click', () => {
    if ((c.value === '')) {
        // DEMANDER AU PROF PR VALUE
        out.textContent = 'Veuillez entrer une valeur';
    } else {
        nombre = convertirCelsiusVersfahrenheit(Number(c.value));
        string = c.value + '°C = ' + nombre + '°F';
        out.textContent = string;
    }
});
}


// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { convertirCelsiusVersfahrenheit, initialiser };
