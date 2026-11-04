export async function chargerUsers() {
    const reponse = await fetch('./../../data/users.json');
    return await reponse.json();
}