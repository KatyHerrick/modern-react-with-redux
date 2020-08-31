import React, { useState } from 'react';

const Accordion = ({ items }) => {
	// Initialize state in a function component with the useState() hook.
	// Breakdown of how to use useState():
	// activeIndex is the piece of state to add
	// setActiveIndex is the function to change the piece of state
	// null is the initial value for the piece of state
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	}

	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';

		return (
			<React.Fragment key={item.title}>
				<div
					onClick={() => onTitleClick(index)}
					className={`title ${active}`}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	})
	return (
		<div className="ui styled accordion">
			{renderedItems}
		</div>
	);
};

export default Accordion;