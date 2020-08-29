import React from 'react';

const Loader = (props) => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">
				{props.text}
			</div>
		</div>
	);
};

Loader.defaultProps = {
	text: "Loading..."
}

export default Loader;
