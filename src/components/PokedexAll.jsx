import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function PokedexAll() {
  const [data, SetData] = useState([]);
  const [poke, setPoke] = useState("");
  const [error, setError] = useState(false)

//   useEffect(() => {
//      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
//      .then((res) => SetData([res.data] || []))
//     //  quand la console affiche data "is not a fonction", c'est parce que j'essaye de mapé quelque choses qui n'es tpas un tableau 
//   }, [])

function call() {
    if(!poke) {
      
    }
    
    axios
      .get(`https://tyradex.vercel.app/api/v1/pokemon/${poke.toLowerCase()}`)
      .then((res) => SetData([res.data]))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Entrez le Pokémon souhaiter"
          value={poke}
          onChange={(e) => setPoke(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={call}
        >
          Search
        </button>
      </div>
      
      <div className="pokemonContainer">
        <div className="pokemon">
        {data.map((pokemon, index) => (
         <Card key={index} pokemon={pokemon}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default PokedexAll;
