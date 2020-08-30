import React from 'react';

class SearchBar extends React.Component {
	state = { term: ''};

	// Defining a class method as an arrow functions ensures that "this"
	// is bound to the class instance correctly when used.
	onFormSubmit = event => {
		// Prevents form from submitting and refreshing browser on Enter press
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	// See the input element for an example of a controlled input.
	// Best practice: store the value of inputs  in the component's state.
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;