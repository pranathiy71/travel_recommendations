const sBtn = document.getElementById("searchBtn");
const cBtn = document.getElementById("clearBtn");

function fetchPlaces(){
    const search = document.getElementById('search').value.toLowerCase();
    const resultdiv = document.getElementById('display');
    resultdiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        let vals = '';
        switch (search) {
            case "country":
                vals = data.country;
                for( val of vals){
                    let des = document.createElement('div');
                    des.classList.add('pic')
                    des.innerHTML = `<img src="${val.cities[0].imageUrl}"></img><br>`;
                    des.innerHTML += `<h3>${val.cities[0].name}</h3>`;
                    des.innerHTML += `<p>${val.cities[0].description}</p>`;
                    resultdiv.appendChild(des);
                }
                break;
            
            case "temple":
                vals = data.temple;
                for( val of vals){
                    let des = document.createElement('div');
                    des.classList.add('pic')
                    des.innerHTML = `<img src="${val.imageUrl}"></img><br>`;
                    des.innerHTML += `<h3>${val.name}</h3>`;
                    des.innerHTML += `<p>${val.description}</p>`;
                    resultdiv.appendChild(des);
                }
                break;
            
            case "beach":
                vals = data.beach;
                for( val of vals){
                    let des = document.createElement('div');
                    des.classList.add('pic')
                    des.innerHTML = `<img src="${val.imageUrl}"></img><br>`;
                    des.innerHTML += `<h3>${val.name}</h3>`;
                    des.innerHTML += `<p>${val.description}</p>`;
                    resultdiv.appendChild(des);
                }
                break;
            default:
                break;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultdiv.innerHTML = 'An error occurred while fetching data.';
      });  
}

sBtn.addEventListener('click', fetchPlaces);

function resetForm() {
    document.getElementById('search').value = '';
    const resultdiv = document.getElementById('display');
    resultdiv.innerHTML = '';
}

cBtn.addEventListener('click', resetForm);