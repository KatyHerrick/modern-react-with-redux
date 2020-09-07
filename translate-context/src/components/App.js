import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
	state = { language: 'english' };

	onLangChange = (language) => {
		this.setState({ language });
	}

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i onClick={() => this.onLangChange('english')} className="flag us" />
					<i onClick={() => this.onLangChange('tagalog')} className="flag ph" />
				</div>
				<UserCreate />
			</div>
		);
	}
}

export default App;