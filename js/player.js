const getInputValue = () =>{
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = "";
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${inputText}`;
    fetch(url).then(res => res.json()).then(data => displayPlayers(data.player));
}
let imgUrl = '';
let description = '';
const getPlayers = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p').then(res => res.json()).then(data => displayPlayers(data.player));
}
getPlayers();

const displayPlayers = (players) => {
    const playersContainer = document.getElementById('players-info');
    players.forEach(player =>{
         description = player.strDescriptionEN;
         imgUrl = player.strThumb;
        if(!imgUrl){
            imgUrl = 'https://www.thesportsdb.com/images/media/player/cutout/g40b1d1607356215.png';
        }
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div onclick="getDetails('${player.idPlayer}')" class="card h-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="${imgUrl}" class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
                <h5 class="card-title">${player.strPlayer}</h5>
            </div>
        </div>
        `;
        playersContainer.appendChild(div);

    })
    
}

// player-info
const getDetails = (playerId) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php?id=${playerId}`;
    fetch(url).then(res => res.json()).then(data => displayDetails(data.honors[0]));
}

const displayDetails = (player) =>{
    const playerInfoContainer = document.getElementById('player-info');
    playerInfoContainer.textContent = '';
    
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
    <div class='col-5'>
        <h5>${player.strPlayer}</h5>
        <img class="img-thumbnail" src="${imgUrl}" alt="">
        <h6>${player.strHonour}</h6>
        <h6>${player.strTeam}</h6>
        <h6>${player.strSeason}</h6>
        <h6>${player.strSport}</h6>
    </div>
    <div class='col-7'>
        <h4>Description:</h4>
        <p>${description}</p>
    </div>
    `;
    playerInfoContainer.appendChild(div);
}
