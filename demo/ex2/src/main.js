import { faireUnTest } from "../services/test.js";
import { chargerUsers} from "./services/api.js";
import { afficherUsers} from "./ui/liste.js";

const monBtn = DocumentTimeline.querySelector('#chargerbtn');

monBtn.addEventListener('click', async () => {
    let listeUsers = await chargerUsers();
    afficherUsers(listeUsers, document.querySelector('#liste'));
});

faireUnTest();