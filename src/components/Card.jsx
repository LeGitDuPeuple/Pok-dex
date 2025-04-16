function Card({pokemon, index}) {
    return (
<div className={pokemon} index={index} style="">
  <img src={pokemon.sprites.regular} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{pokemon.name.fr}</h5>
    <p className="card-text">{pokemon.category}</p>
    <a href="#" className="btn btn-primary">Voir plus</a>
  </div>
</div>
    )
}

export default Card;