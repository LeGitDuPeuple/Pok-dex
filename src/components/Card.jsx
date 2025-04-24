function Card({ pokemon }) {
  if (!pokemon) return null; // sécurisation basique

  const name = pokemon?.name?.fr || "Nom inconnu";
  const image = pokemon?.sprites?.regular || "";
  const types = pokemon?.types || [];

  return (
    <div className="card">
      <h2>{name}</h2>
      {image && <img src={image} alt={name} />}
      <p>Type(s) : {types.map((t) => t.name).join(", ")}</p>
    </div>
  );
}

export default Card;
