import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component {
	state = { language: 'english' };

	onLangChange = (language) => {
		this.setState({ language });
	}

	render() {
		return (
			<div className="ui container">
				<LanguageSelector onLangChange={this.onLangChange} />
				<ColorContext.Provider value="primary">
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;