/**
 * @author Mathieu
 * Composant root React
 */

import React, { Component } from 'react';
import SearchCompo from './SearchCompo';
import GamesTable from './GamesTable';

class FilterableGamesTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: true
		};
	}
	handleFilterTextChange = (e) => {
		this.setState({
			filterText: e.target.value
		});
	};
	handleInStockChange = (e) => {
		this.setState({
			inStockOnly: e.target.checked
		});
	};
	render() {
		return (
			<div className={"padd"}>
				<h3>Mes jeux</h3>
				<SearchCompo
					handleFilterTextChange={this.handleFilterTextChange}
					handleInStockChange={this.handleInStockChange}
					inStockOnly={this.state.inStockOnly}
				/>
				<GamesTable
					games={this.props.games}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
}

export default FilterableGamesTable;