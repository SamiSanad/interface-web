// Fonction pour vérifier si un exercice est complété
async function checkExercise(exerciseNumber, filePath, validationRules) {
  try {
    debugger;
    const response = await fetch(filePath);
    const content = await response.text();

    // Vérifier chaque règle de validation et compter les réussites
    let passedRules = 0;
    let failedRules = [];
    const totalRules = validationRules.length;

    validationRules.forEach((rule) => {
      let rulePassed = false;

      if (rule.type === 'contains') {
        rulePassed = content.includes(rule.value);
      } else if (rule.type === 'regex') {
        rulePassed = rule.value.test(content);
      } else if (rule.type === 'not_contains') {
        rulePassed = !content.includes(rule.value);
      }

      if (rulePassed) {
        passedRules++;
      } else {
        failedRules.push(rule.description);
      }
    });

    const isCompleted = passedRules === totalRules;
    const isPartial = passedRules > 0 && passedRules < totalRules;

    updateTaskStatus(exerciseNumber, isCompleted);
    return { isCompleted, isPartial, passedRules, totalRules, failedRules };
  } catch (error) {
    updateTaskStatus(exerciseNumber, false);
    return {
      isCompleted: false,
      isPartial: false,
      passedRules: 0,
      totalRules: validationRules.length,
      failedRules: ['Fichier non trouvé'],
    };
  }
}

// Fonction pour mettre à jour le statut d'une tâche
function updateTaskStatus(exerciseNumber, isCompleted) {
  const statusElement = document.getElementById(`task${exerciseNumber}`);
  const taskItem = document.getElementById(`taskItem${exerciseNumber}`);

  if (isCompleted) {
    statusElement.className = 'status completed';
    taskItem.classList.add('completed');
  } else {
    statusElement.className = 'status incomplete';
    taskItem.classList.remove('completed');
  }
}

// Fonction pour mettre à jour la barre de progression
function updateProgress() {
  const totalTasks = 8;
  const completedTasks = document.querySelectorAll('.status.completed').length;
  const percentage = (completedTasks / totalTasks) * 100;

  document.getElementById('progressFill').style.width = percentage + '%';
  document.getElementById(
    'progressText'
  ).textContent = `${completedTasks} / ${totalTasks} exercices complétés`;
}

// Règles de validation pour chaque exercice
const validationRules = {
  1: [
    {
      type: 'contains',
      value: '<!DOCTYPE html>',
      description: 'Ajouter la déclaration DOCTYPE HTML5',
    },
    {
      type: 'regex',
      value: /<html[^>]+lang=["']?fr["']?[^>]*>/i,
      description: 'Ajouter l\'attribut lang="fr" à la balise html',
    },
    {
      type: 'regex',
      value: /<meta[^>]+charset=["']?UTF-8["']?[^>]*>/i,
      description: "Ajouter l'encodage UTF-8 dans le head",
    },
    {
      type: 'regex',
      value: /<title>.+<\/title>/s,
      description: 'Ajouter un titre dans la balise title',
    },
    {
      type: 'regex',
      value: /<p>.+<\/p>/s,
      description: 'Ajouter au moins un paragraphe avec du contenu',
    },
    {
      type: 'regex',
      value: /<em>.+<\/em>/s,
      description: 'Utiliser la balise em pour mettre du texte en emphase',
    },
    {
      type: 'regex',
      value: /<strong>.+<\/strong>/s,
      description: 'Utiliser la balise strong pour du texte important',
    },
  ],
  2: [
    {
      type: 'regex',
      value: /<h1>.+<\/h1>/s,
      description: 'Ajouter un titre principal (h1)',
    },
    {
      type: 'regex',
      value: /<h2>.+<\/h2>/s,
      description: 'Ajouter des sous-titres de niveau 2 (h2)',
    },
    {
      type: 'regex',
      value: /<h3>.+<\/h3>/s,
      description: 'Ajouter des titres de niveau 3 (h3)',
    },
    {
      type: 'regex',
      value: /<p>.+<em>.+<\/em>.+<\/p>/s,
      description: 'Ajouter un paragraphe avec texte en emphase (em)',
    },
    {
      type: 'regex',
      value: /<p>.+<strong>.+<\/strong>.+<\/p>/s,
      description: 'Ajouter un paragraphe avec texte important (strong)',
    },
    {
      type: 'regex',
      value: /<div>.+<\/div>/s,
      description: 'Ajouter un conteneur générique (div)',
    },
    {
      type: 'regex',
      value: /<span>.+<\/span>/s,
      description: 'Ajouter un élément générique inline (span)',
    },
  ],
  3: [
    {
      type: 'regex',
      value: /<ul>[\s\S]*<li>.+<\/li>[\s\S]*<\/ul>/,
      description: 'Créer une liste à puces (ul) avec des éléments (li)',
    },
    {
      type: 'regex',
      value: /<ol>[\s\S]*<li>.+<\/li>[\s\S]*<\/ol>/,
      description: 'Créer une liste numérotée (ol) avec des éléments (li)',
    },
    {
      type: 'regex',
      value: /<dl>[\s\S]*<dt>.+<\/dt>[\s\S]*<dd>.+<\/dd>[\s\S]*<\/dl>/,
      description: 'Créer une liste de définitions (dl, dt, dd)',
    },
    {
      type: 'regex',
      value:
        /<ul>[\s\S]*<li>[\s\S]*<ul>[\s\S]*<li>.+<\/li>[\s\S]*<\/ul>[\s\S]*<\/li>[\s\S]*<\/ul>/,
      description: 'Créer une liste imbriquée (liste dans une liste)',
    },
  ],
  4: [
    {
      type: 'regex',
      value: /<img[^>]+src="https?:\/\/[^"]*"[^>]*>/,
      description: 'Ajouter une image avec URL complète (https://)',
    },
    {
      type: 'regex',
      value: /<img[^>]+alt=".+"[^>]*>/s,
      description:
        "Ajouter l'attribut alt avec description sur toutes les images",
    },
    {
      type: 'regex',
      value: /<img[^>]+src="[^\/h][^"]*"[^>]*>/,
      description: 'Ajouter une image avec chemin relatif (images/...)',
    },
    {
      type: 'regex',
      value: /<img[^>]+src="\/[^"]*"[^>]*>/,
      description: 'Ajouter une image avec chemin absolu (/assets/...)',
    },
    {
      type: 'regex',
      value: /<img[^>]+width="[^"]*"[^>]*>/,
      description: 'Ajouter les dimensions (width) à une image',
    },
  ],
  5: [
    {
      type: 'regex',
      value: /<a[^>]+href="page1\.html"[^>]*>.+<\/a>/,
      description: 'Créer un lien vers page1.html',
    },
    {
      type: 'regex',
      value: /<a[^>]+href="sous-dossier\/page2\.html"[^>]*>.+<\/a>/,
      description: 'Créer un lien vers sous-dossier/page2.html',
    },
    {
      type: 'regex',
      value: /<a[^>]+href="https?:\/\/[^"]*"[^>]+target="_blank"[^>]*>.+<\/a>/s,
      description: "Créer un lien externe qui s'ouvre dans un nouvel onglet",
    },
    {
      type: 'regex',
      value: /<a[^>]+href="mailto:[^"]*"[^>]*>.+<\/a>/,
      description: 'Créer un lien email (mailto:)',
    },
    {
      type: 'regex',
      value: /<a[^>]+href="tel:[^"]*"[^>]*>.+<\/a>/,
      description: 'Créer un lien téléphone (tel:)',
    },
    {
      type: 'regex',
      value: /<a[^>]+href="#[^"]*"[^>]*>.+<\/a>/,
      description: 'Créer un lien ancre interne (#section)',
    },
    {
      type: 'regex',
      value: /<[^>]+id="section-bas"[^>]*>/,
      description: 'Créer un élément avec id="section-bas" pour l\'ancre',
    },
  ],
  6: [
    {
      type: 'regex',
      value: /id=".+"/,
      description: 'Ajouter des identifiants uniques (id) aux éléments',
    },
    {
      type: 'regex',
      value: /class=".+"/,
      description: 'Ajouter des classes aux éléments',
    },
    {
      type: 'regex',
      value: /class="[^"]*\s+[^"]*"/,
      description: 'Utiliser des classes multiples sur un élément',
    },
    {
      type: 'regex',
      value: /<a[^>]+href="#[^"]*"[^>]*>.+<\/a>/,
      description: 'Créer des liens vers des identifiants (#id)',
    },
    {
      type: 'regex',
      value: /<div[^>]+(id|class)=".+"[^>]*>/,
      description: 'Utiliser des conteneurs avec id ou class',
    },
  ],
  7: [
    {
      type: 'regex',
      value: /<header>.+<\/header>/s,
      description: 'Ajouter un en-tête de page (header)',
    },
    {
      type: 'regex',
      value: /<nav>.+<\/nav>/s,
      description: 'Ajouter une zone de navigation (nav)',
    },
    {
      type: 'regex',
      value: /<main>.+<\/main>/s,
      description: 'Ajouter le contenu principal (main)',
    },
    {
      type: 'regex',
      value: /<section[^>]*>.+<\/section>/s,
      description: 'Ajouter des sections thématiques (section)',
    },
    {
      type: 'regex',
      value: /<article>.+<\/article>/s,
      description: 'Ajouter des articles autonomes (article)',
    },
    {
      type: 'regex',
      value: /<aside>.+<\/aside>/s,
      description: 'Ajouter du contenu complémentaire (aside)',
    },
    {
      type: 'regex',
      value: /<footer>.+<\/footer>/s,
      description: 'Ajouter un pied de page (footer)',
    },
  ],
  8: [
    {
      type: 'regex',
      value: /<nav>.+href="#.+"[\s\S]*<\/nav>/s,
      description: 'Créer une navigation avec liens ancres (#section)',
    },
    {
      type: 'regex',
      value: /<section[^>]+id=".+"[^>]*>/,
      description: 'Ajouter des identifiants aux sections',
    },
    {
      type: 'regex',
      value: /<a[^>]+href="#.+"[^>]*>.+<\/a>/,
      description: 'Créer des liens vers ancres internes',
    },
    {
      type: 'regex',
      value: /<a[^>]+href="https?:\/\/.+"[^>]+target="_blank"[^>]*>.+<\/a>/s,
      description: "Créer un lien externe qui s'ouvre dans un nouvel onglet",
    },
    {
      type: 'regex',
      value:
        /(<h[2-6][^>]*id=".+"[^>]*>|<section[^>]+id=".+"[^>]*>[\s\S]*?<h[2-6])/s,
      description:
        'Ajouter des identifiants aux sections ou titres pour les ancres',
    },
  ],
};

// Fonction principale pour vérifier tous les exercices
async function checkAllExercises() {
  const exercises = [
    { number: 1, path: 'exercices/1-structure.html' },
    { number: 2, path: 'exercices/2-balises-base.html' },
    { number: 3, path: 'exercices/3-listes.html' },
    { number: 4, path: 'exercices/4-images.html' },
    { number: 5, path: 'exercices/5-liens/index.html' },
    { number: 6, path: 'exercices/6-attributs.html' },
    { number: 7, path: 'exercices/7-semantique.html' },
    { number: 8, path: 'exercices/8-navigation.html' },
  ];

  for (const exercise of exercises) {
    await checkExercise(
      exercise.number,
      exercise.path,
      validationRules[exercise.number]
    );
  }

  updateProgress();
}

// Fonction pour validation manuelle avec feedback détaillé
async function validateAllExercises() {
  const exercises = [
    {
      number: 1,
      path: 'exercices/1-structure.html',
      name: "Structure d'un document HTML",
      file: '1-structure.html',
    },
    {
      number: 2,
      path: 'exercices/2-balises-base.html',
      name: 'Balises de base et hiérarchie',
      file: '2-balises-base.html',
    },
    {
      number: 3,
      path: 'exercices/3-listes.html',
      name: 'Listes HTML',
      file: '3-listes.html',
    },
    {
      number: 4,
      path: 'exercices/4-images.html',
      name: 'Images et attributs',
      file: '4-images.html',
    },
    {
      number: 5,
      path: 'exercices/5-liens/index.html',
      name: 'Navigation et liens',
      file: '5-liens/',
    },
    {
      number: 6,
      path: 'exercices/6-attributs.html',
      name: 'Attributs ID et Class',
      file: '6-attributs.html',
    },
    {
      number: 7,
      path: 'exercices/7-semantique.html',
      name: 'Balises sémantiques HTML5',
      file: '7-semantique.html',
    },
    {
      number: 8,
      path: 'exercices/8-navigation.html',
      name: 'Navigation avancée et ancres',
      file: '8-navigation.html',
    },
  ];

  const resultsContainer = document.getElementById('validationResults');
  resultsContainer.innerHTML =
    '<h3 style="margin-bottom: 15px;">📋 Résultats de validation :</h3>';

  for (const exercise of exercises) {
    const result = await checkExercise(
      exercise.number,
      exercise.path,
      validationRules[exercise.number]
    );

    let messageClass, icon, message;

    if (result.isCompleted) {
      messageClass = 'validation-success';
      icon = '✅';
      message = `Exercice ${exercise.number} (${exercise.file}) : Parfait ! Tous les éléments sont corrects.`;
    } else if (result.isPartial) {
      messageClass = 'validation-partial';
      icon = '⚠️';
      message = `Exercice ${exercise.number} (${
        exercise.file
      }) : Bon travail ! Il manque : ${result.failedRules.join(', ')}.`;
    } else {
      messageClass = 'validation-error';
      icon = '❌';
      message = `Exercice ${exercise.number} (${
        exercise.file
      }) : À compléter. Manque : ${result.failedRules.join(', ')}.`;
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `validation-message ${messageClass}`;
    messageDiv.innerHTML = `<span class="validation-icon">${icon}</span>${message}`;
    resultsContainer.appendChild(messageDiv);
  }

  updateProgress();

  // Vérifier si tous les exercices sont complétés pour afficher les félicitations
  const completedCount = document.querySelectorAll('.status.completed').length;
  if (completedCount === 8) {
    const celebrationDiv = document.createElement('div');
    celebrationDiv.className = 'validation-message validation-success';
    celebrationDiv.style.fontSize = '16px';
    celebrationDiv.style.fontWeight = 'bold';
    celebrationDiv.style.textAlign = 'center';
    celebrationDiv.style.marginTop = '20px';
    celebrationDiv.innerHTML = `
              <span class="validation-icon">🎉</span>
              Bravo ! Vous avez complété tous les exercices HTML ! 
              Vous maîtrisez maintenant les fondamentaux du HTML. 
              Consultez le dossier solutions/ pour comparer vos réponses.
          `;
    resultsContainer.appendChild(celebrationDiv);
  }
}

// Vérifier les exercices au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Vérification initiale silencieuse
  checkAllExercises();

  // Ajouter l'événement au bouton de validation
  document
    .getElementById('validateBtn')
    .addEventListener('click', validateAllExercises);

  // Revérifier toutes les 3 secondes pour détecter les changements
  setInterval(checkAllExercises, 3000);
});

// Vérifier aussi quand la page devient visible (retour depuis un exercice)
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    setTimeout(checkAllExercises, 500);
  }
});
