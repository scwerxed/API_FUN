const smashCount = 0;
const passCount = 0;


document.getElementById("startBtn").addEventListener("click", function () {
        const smashBtn = document.getElementById("smashBtn");
        const passBtn = document.getElementById("passBtn");
        const response = fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
            .then(res => res.json())
            .then((data) => {
                    const pokeID = data.pokeID

                }
            );


        function showPoke(id) {
            fetch(`https://dummyjson.com/products/${id}`)
                .then(res => res.json())
                .then(product => {
                    if (smashBtn) {
                        smashBtn++;
                        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
                        document.getElementById("pokemonImage").src = pokeID.image;
                        document.getElementById("pokeName").innerText = pokeID.name;
                        pokeID++;

                    } else if (passBtn) {
                        passCount++;
                        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
                        document.getElementById("pokemonImage").src = pokeID.image;
                        document.getElementById("pokeName").innerText = pokeID.name;
                        pokeID++;
                    }
                });
        }
    }
)

