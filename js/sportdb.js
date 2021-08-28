const getSportdbInfo = (url, type) =>{
    fetch(url)
        .then(res => res.json())
        .then(data => displaySportsInfo(data.sports.slice(0, 12), type));
}
getSportdbInfo('https://www.thesportsdb.com/api/v1/json/1/all_sports.php', 'Sport Type');
getSportdbInfo('https://www.thesportsdb.com/api/v1/json/1/all_sports.php', 'Sport');

const displaySportsInfo = (sports, type) =>{
    const sportInfoContainer = document.getElementById("sports-container");
    const infoContainer = document.getElementById("title");
    const h2 = document.createElement('h2');
    h2.innerText = type;
    infoContainer.appendChild(h2);
    sports.forEach(sport =>{
        const div = document.createElement('div');
        div.classList.add('col');
        console.log(sport);
        let imgUrl =sport.strSportThumbGreen;
        if(sport.strSportThumb){
             imgUrl = sport.strSportThumb;
        }else{
             imgUrl = sport.strSportThumbGreen;
        }
       
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${sport.strSport}</h5>
                    <p class="card-text">${sport.strSportDescription.slice(0, 100)}</p>
                </div>
            </div>
        `; 
    sportInfoContainer.appendChild(div);
    })
    
}