function search() {
    let input = document.getElementById("search-value");
    console.log(input.value);
    retrieveApiInformation(input.value.toLowerCase());
}

function retrieveApiInformation(value) {
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(url).then((res) => {
        if(res.status != 200) {
            showError(res);
            return;
        }
        return res.json();  
    }).then((data) => {
        if(data) {
            console.log(data);
            updateSprite(data.sprites.other.home.front_default);
            updateInformation(data);
        }
    })
}

function updateSprite(url) {
    let imgElement = document.getElementById("sprite");
    imgElement.src = url;
}

function updateInformation(data) {
    resetScreen();
    updateName(data.order, data.name);
    updateAbilities(data.abilities);
    updateMoves(data.moves);
    updateType(data.types);
    updateHeightWeight(data.height, data.weight);
    updateStats(data.stats);
}

function updateName(order, name) {
    let nameElement = document.getElementById("name");
    nameElement.innerText = "#" + order + " - " + name.toUpperCase();
}

function updateAbilities(abilities) {
    let abilitiesElement = document.getElementById("abilities");
    abilities.forEach(ability => {
        var text = document.createTextNode(ability.ability.name);
        var newAbility = document.createElement("span");
        newAbility.append(text);
        newAbility.classList.add("ability");
        abilitiesElement.append(newAbility);
    });
}

function updateMoves(moves) {
    let movesElement = document.getElementById("moves");
    moves.forEach(move => {
        var text = document.createTextNode(move.move.name);
        var newMove = document.createElement("span");
        newMove.append(text);
        newMove.classList.add("move");
        movesElement.append(newMove);
    });
}

function updateType(types) {
    let typeElement = document.getElementById("type");
    types.forEach(type => {
        var newType = document.createElement("span");
        newType.innerText = type.type.name.toUpperCase();
        newType.classList.add("type", type.type.name);
        typeElement.append(newType);
    });
}

function updateHeightWeight(height, weight) {
    var heightElement = document.getElementById("height").getElementsByTagName("span")[0];
    heightElement.innerText = (height / 10) + " M";
    var weightElement = document.getElementById("weight").getElementsByTagName("span")[0];
    weightElement.innerText = (weight / 10) + " KG";
}

function updateStats(stats) {
    for(let stat of stats) {
        let value = stat.base_stat;
        let id = stat.stat.name;
        let statElement = document.getElementById(id).getElementsByClassName("bar-filled")[0];
        statElement.style.height = value + "%";
    }
}

function resetScreen() {
    let nameElement = document.getElementById("name");
    nameElement.innerText = "";
    let abilitiesElement = document.getElementById("abilities");
    abilitiesElement.innerHTML = "";
    let movesElement = document.getElementById("moves");
    movesElement.innerHTML = "";
    let typeElement = document.getElementById("type");
    typeElement.innerHTML = "";
    let heightElement = document.getElementById("height").getElementsByTagName("span")[0];
    heightElement.innerHTML = "";
    let weightElement = document.getElementById("weight").getElementsByTagName("span")[0];
    weightElement.innerHTML = "";
    let stats = document.getElementsByClassName("bar-filled");
    for (let stat of stats) {
        stat.style.height = 0;
    }
}

function showError(error) {
    console.log("ERROR", error)
}