async function chargerUsers(){
    try {
        const chargement = document.querySelector("#chargement")
        const laReponse = await fetch('https://coursinfo.ca/420-3E5/users'); //Sans await, une promesse, avec await, une réponse
        if (!laReponse.ok) {
            throw new Error("erreur de reponse " + laReponse.status);
        }
        const data = await laReponse.json();

        const divInfo = document.querySelector('#infoUser');
        const imgUser = document.querySelector('#imageUsr');

        divInfo.textContent = data.results[0].name.first + ' ' + data.results[0].name.last;
        imgUser.src = data.results[0].picture.medium;
        imgUser.hidden = false;
    } catch (e) {
        console.error(e.message)
    }
}

const monButton = document.querySelector('#btnFetch');

monButton.addEventListener('click', () => {
    chargerUsers();
    console.log('apresCharger');
})