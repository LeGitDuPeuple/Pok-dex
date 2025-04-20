import React from 'react'
import { NavLink } from 'react-router-dom';

function Home () {
    return (
<div className="navigation">
    <NavLink to ="/pokedex">
    <li>Pokedex</li>
    </NavLink>
</div>
    )
}

export default Home;