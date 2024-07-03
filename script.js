// Datos de los perfiles de jugadores
const players = [
    {
        name: "marcos306#euw",
        elo: "Diamante II",
        opggLink: "https://euw.op.gg/summoner/userName=marcos306"
    },
    {
        name: "kuzanero#euw",
        elo: "Platino IV",
        opggLink: "https://euw.op.gg/summoner/userName=kuzanero"
    },
    {
        name: "CocoBoymrs#9537",
        elo: "Oro I",
        opggLink: "https://op.gg/summoner/userName=CocoBoymrs#9537"
    }
];

// Función para mostrar los perfiles en la página
function displayProfiles() {
    const profilesSection = document.getElementById('profiles');

    players.forEach(player => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        profileDiv.innerHTML = `
            <h2>${player.name}</h2>
            <p>Elo: ${player.elo}</p>
            <a href="${player.opggLink}" target="_blank">Ver perfil en OP.GG</a>
        `;

        profilesSection.appendChild(profileDiv);
    });
}

// Llamar a la función para mostrar los perfiles al cargar la página
window.addEventListener('load', displayProfiles);
