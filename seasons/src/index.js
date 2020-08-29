import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

	// The constructor is the only place where one can assign
	// state directly. Everywhere else, use setState().
	// The constructor isn't required. State can be initialized
	// as just this.state = {...}, and babel will translate it
	// into an equivalent constructor.
	// ...if you do use a constructor, always begin with super(props)!
	constructor(props) {
		super(props);

		this.state = {
			lat: null,
			errorMessage: ''
		};
	}

	// Best practice: put data loading here instead of constructor
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => { this.setState({ lat: position.coords.latitude }) },
			err => { this.setState({ errorMessage: err.message }) }
		);
	}

	// Best practice: move conditional logic out of render method
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Loader text="Please accept location request" />;
	}

	// "border red" is just an example to demonstrate a use case for
	// moving conditional logic out of render(). Does not actually
	// create a border without css.
	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);