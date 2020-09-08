import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
	// Keyword prop 'contextType' connects a Context object to a class component.
	static contextType = LanguageContext;

	render() {
		console.log(this.context);
		return (
			<button className="ui button primary">
				Submit
			</button>
		);
	}
}

export default Button;