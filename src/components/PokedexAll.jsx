import axios from "axios";
import { useState, useEffect } from "react";

function PokedexAll() {
  const [data, SetData] = useState([]);
  const [poke, setPoke] = useState("");

  useEffect(() => {
     axios.get(`https://tyradex.vercel.app/api/v1/pokemon/tiplouf`)
     .then((res) => SetData(res.data || []))
  }, [])

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
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default PokedexAll;
