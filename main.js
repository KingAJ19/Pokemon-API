//Fetching the pokemon data from the API
fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => {
    return response.json()
})
.then((data) => {
    let pokemonli = data.results
    let ul = document.getElementById("pokemonli")
    return pokemonli.map((pokemon) => {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.innerHTML = pokemon.name
        a.href= pokemon.url
        li.className = "pokestyle"
        li.appendChild(a)
        ul.appendChild(li)
    })
});

//function GetList():
//fetch().then().then()
//window.onload=GetList()

//document.getElementByID("next"):
//.setAttribute("onclick"):
//getList(${url})