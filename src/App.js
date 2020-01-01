import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
	constructor(){
		super()
		this.state = {
			string: 'Oi, eu sou o Goku!',
			monsters: [
				{
					name: 'Frankenstein',
					id: '1'
				},
				{
					name: 'Dracula',
					id: '2'
				},
				{
					name: 'Zombie',
					id: '3'
				},
			],
			pokedex: [],
			searchField: '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({monsters: users}))

		fetch('https://pokeapi.co/api/v2/pokedex/1')
		.then(response => response.json())
		.then(result => {
			this.setState(
					{pokedex: result.pokemon_entries},
					() => console.log(this.state)
				)
		})
	}

	handleChange = (e) => {
		this.setState({searchField: e.target.value})
	}

	render(){
		const {pokedex, searchField} = this.state
		const filteredPokemon = pokedex.filter(pokemon => pokemon.pokemon_species.name.toLowerCase().includes(searchField.toLowerCase()))
		return(
			<div className="App">
			<header className="App-header">
				<div>
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Pokemon List</h1>
				</div>
				
				<SearchBox
					placeholder='Pesquisar'
					handleChange= {this.handleChange}
				/>
				<CardList monsters={filteredPokemon}></CardList>
				<button onClick={() => this.setState({string: 'Teste 123456'})}>Change Text</button>
			</header>
		  </div>
		);
	}
}

export default App;
