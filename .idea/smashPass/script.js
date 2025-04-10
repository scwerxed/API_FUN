fetch(`https://pokeapi.co/api/v2/pokemon/?offset=1&limit=10277`)
    .then(res => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
        let pokeIndex = 0;

        let smashCount = 0;
        let passCount = 0;

        const pokeName = document.getElementById("pokeName");

        function updatePokemon() {
            if (pokeIndex < data.results.length) {
                pokeName.innerText = data.results[pokeIndex].name;
                // document.getElementById("pokemonImage").src = getPokemonImage(data.results[pokeIndex].url);
            } else {
                pokeName.innerText = "No more Pokémon!";
            }
        }

        document.getElementById("smash").addEventListener("click", () => {
            updatePokemon();
            smashCount++;
            pokeIndex++;
        })

        document.getElementById("pass").addEventListener("click", () => {
            updatePokemon();
            passCount++;
            pokeIndex++;
        });
    })