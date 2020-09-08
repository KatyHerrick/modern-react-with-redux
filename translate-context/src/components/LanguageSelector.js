import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;

	render() {
		return (
			<div>
				Select a language:
				<i onClick={() => this.context.onLangChange('english')} className="flag us" />
				<i onClick={() => this.context.onLangChange('tagalog')} className="flag ph" />
			</div>
		);
	}
}

export default LanguageSelector;