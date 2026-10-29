const robot = {
  avancer: () => console.log('🤖 Le robot avance !'),
  gauche: () => console.log('🤖 Le robot tourne à gauche !'),
  droite: () => console.log('🤖 Le robot tourne à droite !'),
};

const instructions = ['avancer', 'sauter', 'droite', 'danser', 'gauche'];

// Tentez d’exécuter chaque instruction avec un try…catch…finally :
// Si l’instruction n’existe pas, une erreur doit être levée et un message d’erreur doit être affiché dans la console.
// si l’instruction est valide, inscrire l'instruction exécutée dans la console.
// finally, afficher "Instruction terminée" dans la console.
for (const action of instructions) {
  
  try {
    robot[action]();
  } catch (error) {
    console.error(`${action} n'existe pas `);
  }finally {
    console.log('instruction terminée');
  }
}