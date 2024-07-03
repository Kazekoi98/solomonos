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

function displayProfiles() {
    const profilesContainer = document.getElementById('player-profiles');
    players.forEach(player => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';
        profileDiv.innerHTML = `
            <h2>${player.name}</h2>
            <p>ELO: ${player.elo}</p>
            <a href="${player.opggLink}" target="_blank">Ver perfil en OP.GG</a>
        `;
        profilesContainer.appendChild(profileDiv);
    });
}

window.onload = displayProfi
