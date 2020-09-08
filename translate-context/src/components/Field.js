import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	render() {
		return (
			<div className="ui field">
				<label>Name</label>
				<input />
			</div>
		);
	}
}

export default Field;