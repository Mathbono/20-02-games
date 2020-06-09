/**
 * @author Mathieu
 * Composant root React
 */
import React, { Component } from 'react';

class SearchCompo extends Component {
	render() {
		return (
			<div className={"padd"}>
				<input type="text"
				       placeholder={"Rechercher"}
				       onChange={this.props.handleFilterTextChange} />
				<input type="checkbox"
				       id={"search"}
				       checked={this.props.inStockOnly}
				       onChange={this.props.handleInStockChange}/>
				<label htmlFor="search"> En stock seulement</label>
			</div>
		);
	}
}

export default SearchCompo;