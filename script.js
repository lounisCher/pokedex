const searchInput = document.getElementById("search-input");
const searchbtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const PokeWeight = document.getElementById("weight");
const PokeHeight = document.getElementById("height");
const PokeTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");
const pokemonUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchPokemon = async () => {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase();
        const res = await fetch(pokemonUrl + `/${pokemonNameOrId}`);
        const data = await res.json();
        pokemonInfo(data);
    } catch {
        alert("Pokémon not found");
    }
}

const pokemonInfo = (data) => {
    const { name, id, height, weight, types, sprites, stats } = data;

    pokemonName.textContent = name.toUpperCase();
    pokemonId.textContent = `#${id}`;
    PokeHeight.textContent = `Height: ${height}`;
    PokeWeight.textContent = `Weight: ${weight}`;
    PokeTypes.innerHTML = ''; 
    types.forEach(typeInfo => {
        const typeElement = document.createElement('span');
        typeElement.textContent = typeInfo.type.name.toUpperCase();
        PokeTypes.appendChild(typeElement);
    });

    spriteContainer.innerHTML = ''; 
    const sprite = document.createElement('img');
    sprite.id = 'sprite';
    sprite.src = sprites.front_default;
    sprite.alt = name;
    spriteContainer.appendChild(sprite);
    hp.textContent = `${stats[0].base_stat}`;
    attack.textContent = `${stats[1].base_stat}`;
    defense.textContent = `${stats[2].base_stat}`;
    specialAttack.textContent = `${stats[3].base_stat}`;
    specialDefense.textContent = `${stats[4].base_stat}`;
    speed.textContent = `${stats[5].base_stat}`;
}
const creatImg=()=>{

}

searchbtn.addEventListener('click', fetchPokemon);
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchPokemon();
    }
});
