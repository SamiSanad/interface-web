import {add as addition, mult as multiplication, PI} from './math.js';
import *  as mathematique from './math.js';
import afficherAlert from './message.js';

import {add, mult, PI, formatMessage} from './tous.js';
let resultat = mathematique.add(4,10);
let resultatMult = multiplication(PI, 10);

console.log(resultat);

afficherAlert('Attention!!');
