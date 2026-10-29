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

let ctrl = new AbortController;
// Un seul gestionnaire pour capture/target/bulle
function handlePhase(e) {
  const phase =
    e.eventPhase === Event.CAPTURING_PHASE
      ? 'capture'
      : e.eventPhase === Event.AT_TARGET
      ? 'target'
      : 'bulle';

  log(`[${phase}] currentTarget=${e.currentTarget.id} | target=${e.target.id}`);
}

// Ajout: même handler, deux écoutes (capture + bulle)
[grand, moyen, petit].forEach((el) => {
  el.addEventListener('click', handlePhase, { capture: true, signal:ctrl.signal }); // capture
  el.addEventListener('click', handlePhase, {signal:ctrl.signal}); // target + bulle
});
const btnStop = document.getElementById('btnStop');
btnStop.addEventListener(cancelIdleCallback,()=>{
  ctrl.abort()
}, {once:true})


