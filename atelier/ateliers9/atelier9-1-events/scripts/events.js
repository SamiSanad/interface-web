const terrain = document.getElementById('terrain');
const pion = document.getElementById('pion');

let posX = 100;
let posY = 100;
let dragging = false;
let offsetX = 0; //Pr calculer depuis centre du panda
let offsetY = 0;

function getSpeed(ctrlPressed) {
  const styles = getComputedStyle(document.documentElement);
  const normal = Number(styles.getPropertyValue('--speed-normal')) || 10;
  const boost = Number(styles.getPropertyValue('--speed-boost')) || 25;
  return ctrlPressed ? boost : normal;
}

// verifier le depassement des bords du terrain
// et corriger la position du panda si besoin
function fixAuTerrain() {
  const stTerrain = getComputedStyle(terrain);
  const stPion = getComputedStyle(pion);

  const terrainW = parseFloat(stTerrain.width);
  const terrainH = parseFloat(stTerrain.height);
  const pionW = parseFloat(stPion.width);
  const pionH = parseFloat(stPion.height);

  posX = Math.max(0, Math.min(posX, terrainW - pionW));
  posY = Math.max(0, Math.min(posY, terrainH - pionH));
  
  
}

// appliquer la position du panda dans le style
function appliquePosition() {
  // TODO:  appliquer la position
  // indice : utiliser le style left et top
  pion.style.left = `${posX}px`;
  pion.style.top = `${posY}px`;
}

// Déplacement au clavier
document.addEventListener('keydown', (event) => {
  const step = getSpeed(event.ctrlKey);
  // TODO:  appliquer la nouvelle position suite à l'appui d'une touche fléchée
  switch(event.key){
    case'ArrowRight' :
      posX+=step;
      break;
    case'ArrowLeft' :
      posX-=step;
      break;
    case'ArrowUp' :
      posY-=step;
      break;
    case'ArrowDown' :
      posY+=step;
      break;
  }
  // après modification, limiter la position au terrain et appliquer
  fixAuTerrain();
  appliquePosition();
});

//  Déplacement à la souris (drag)
pion.addEventListener('mousedown', (event) => {
  dragging = true;
  pion.classList.add('dragging');
  offsetX = event.offsetX;
  offsetX = event.offsetY;
  // passer en mode glisser (drag)
  // ajouter la classe CSS associée 'dragging'
  // créer une variable rect pour retrouver les coordonées de position du div panda par rapport au curseur
  // utiliser pion.getBoundingClientRect() qui retourne un objet avec les propriétés
  // left et top du panda
  // ajuster offsetX et offsetY en fonction de la position
  // du curseur sur le panda, il sera utilisé pour conserver la position relative
  // entre le curseur et le panda pendant le glisser 'mousemove'
});

document.addEventListener('mousemove', (event) => {
  if (!dragging) return;
  let tRect = terrain. getBoundingClientRect();
  posX = event.clientX - tRect.left - offsetX;
  posY = event.clientY - tRect.top - offsetY;
  // si en mode glisser (drag) calculer la nouvelle position
  // du panda en fonction de la position du curseur
  // s'assurer de limiter la position au terrain et appliquer
  // appliquer la nouvelle position appliquePosition();
  fixAuTerrain();
  appliquePosition();
});

document.addEventListener('mouseup', () => {
  dragging = false;
  pion.classList.remove('dragging');
  // si en mode glisser (drag) terminer le mode glisser et
  // enlever la classe CSS associée 'dragging'
});

appliquePosition();
