import React, { Component } from 'react';

import './App.css';
import { GAMES } from './data';
import FilterableGamesTable from './games/FilterableGamesTable';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	}
	onInputChange = (val) => {
		this.setState({
			name: val
		});
	};
	render() {
		return (
			<div className="App App-header">
				<main>
					<FilterableGamesTable games={GAMES}/>
				</main>
			</div>
		);
	}
}

export default App;
