/**
 * Question 6 - Appels API avec fetch et async/await
 * Charger des recettes depuis une API externe
 */

/**
 * Charge les recettes depuis l'API
 */
async function chargerRecettes() {
    // TODO: Afficher un message de chargement dans #recettes
    const recettes = document.querySelector("#recettes");
    recettes.textContent = "Ça charge..."
    // TODO: Utiliser try/catch pour gérer les erreurs
    try {
        const response = await fetch("https://dummyjson.com/recipes?limit=3");
        if (!response.ok) {
            throw new Error("Impossible de charger les recettes.");
        }
        const data = await response.json();

        const lesRecipes = data.recipes;

        
        while (recettes.firstChild !== null) {
            recettes.firstChild.remove();
        }

        for (const recipe of lesRecipes) {
            const nouvRecipe = document.createElement("li");
            nouvRecipe.textContent = `${recipe.name} - ${recipe.prepTimeMinutes} min - ${recipe.cuisine}`
            recettes.append(nouvRecipe);
            //AJOUTER ÉLÉMENT!!!!!!!!!!!!!
        }

    } catch (error) {
        recettes.textContent = error.message;
    }
    // TODO: Utiliser await fetch() pour récupérer les données de l'API
    // URL: https://dummyjson.com/recipes?limit=3

    // TODO: Vérifier si la réponse est ok (response.ok) 

    // TODO: Convertir la réponse en JSON avec await response.json()

    // TODO: Récupérer le tableau recipes depuis data.recipes 

    // TODO: Vider la liste #recettes

    // TODO: Parcourir les recettes et créer un <li> pour chacune
    // Format: "nom - prepTimeMinutes min - cuisine"

    // TODO: En cas d'erreur, afficher un message d'erreur dans #recettes
}

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#charger, #recettes)
    const recettes = document.querySelector("#recettes");
    const charger = document.querySelector("#charger");
    // TODO: Au clic sur #charger, appeler chargerRecettes()
    charger.addEventListener("click", () => {
        chargerRecettes();
    })
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { chargerRecettes, initialiser };
