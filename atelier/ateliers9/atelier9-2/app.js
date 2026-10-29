const grand = document.getElementById('grand');
const moyen = document.getElementById('moyen');
const petit = document.getElementById('petit');
const logDiv = document.getElementById('log');
const btnClear = document.getElementById('clear');

function log(msg) {
  console.log(msg);
  const p = document.createElement('div');
  p.textContent = msg;
  logDiv.append(p);
}

btnClear.addEventListener('click', () => (logDiv.textContent = ''));

function gerePhase(e){
  let phase = '';
  if (e.eventPhase===Event.CAPTURING_PHASE) {
    phase = 'capture';
  } else if (e.eventPhase===Event.AT_TARGET) {
    phase = 'target';
  } else {
    phase = 'bubble';
  }
  log(`[${phase}] currentTarget=${e.currentTarget.id} | target=${e.target.id}.`)
}
//TODO 1
// Un seul gestionnaire pour capture/target/bulle
// appeler la methode log avec le format:
// [phase] currentTarget=id | target=id
// où phase est 'capture', 'target' ou 'bulle'. verifiable avec e.eventPhase

//TODO 2
// Ajout: même handler, deux écoutes (capture + bulle)
 [grand, moyen, petit].forEach((elem)=>{
  elem.addEventListener('click', gerePhase);
  elem.addEventListener('click', gerePhase,{capture:true});
 })