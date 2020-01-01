import React from 'react'
import './card.styles.css'
export const Card = (props) => (
    <div className='card-container'>
        <img alt="teste" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.monster.entry_number}.png`}></img>
        <p> {props.monster.pokemon_species.name} </p>
    </div>
)