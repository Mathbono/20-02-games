/**
 * @author Mathieu
 * Composant root React
 */
import React, { Component } from 'react';

class GameRow extends Component {
	render() {
		let name;
		if(this.props.game.stocked === true) {
			name = this.props.game.name;
		}
		else {
			name = <span style={{"color": "red"}}>{this.props.game.name}</span>
		}
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.game.price}€</td>
			</tr>
		);
	}
}

export default GameRow;