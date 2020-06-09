/**
 * @author Mathieu
 * Composant root React
 */
import React, { Component } from 'react';

class GamesCategory extends Component {
	render() {
		return (
			<tr>
				<td><strong>{this.props.category}</strong></td>
			</tr>
		);
	}
}

export default GamesCategory;