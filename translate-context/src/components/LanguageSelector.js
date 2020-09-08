import React from 'react';

class LanguageSelector extends React.Component {
	render() {
		return (
			<div>
				Select a language:
				<i onClick={() => this.props.onLangChange('english')} className="flag us" />
				<i onClick={() => this.props.onLangChange('tagalog')} className="flag ph" />
			</div>
		);
	}
}

export default LanguageSelector;