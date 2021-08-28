const getSportdbInfo = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
        .then(res => res.json())
        .then(data => displaySportsInfo(data.sports.slice(0, 20)));
}
getSportdbInfo();

const displaySportsInfo = (sports) =>{
    const sportInfoContainer = document.getElementById("sports-container");
   
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