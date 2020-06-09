/**
 * @author Mathieu
 * Composant root React
 */
import React, { Component } from "react";
import GameRow from "./GameRow";
import GamesCategory from "./GamesCategory";

class GamesTable extends Component {
	render() {
		const ROWS = [];
		let lastCat;
		this.props.games.forEach(game => {
			if(game.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
				return;
			}
			if(this.props.inStockOnly && !game.stocked) {
				return;
			}
			if(game.category !== lastCat) {
				ROWS.push(<GamesCategory category={game.category}/>);
			}
			ROWS.push(<GameRow key={game.name} game={game} />);
			lastCat = game.category;
		});
		return (
			<div className={"padd"}>
				<table>
					<thead>
						<tr>
							<th>Nom</th>
							<th>Prix</th>
						</tr>
					</thead>
					<tbody>
						{ROWS}
					</tbody>
				</table>
			</div>
		);
	}
}

export default GamesTable;