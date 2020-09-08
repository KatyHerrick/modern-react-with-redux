import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	// Keyword prop 'contextType' connects a Context object to a class component.
	// Only works when there is only one Context in use in the component.
	static contextType = LanguageContext;

	render() {
		const text = this.context.language === 'english' ? 'Name' : 'Pangalan';
		return (
			<div className="ui field">
				<label>{text}</label>
				<input />
			</div>
		);
	}
}

export default Field;