import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
	{
		title: 'When should I go to Antarctica?',
		content: 'Typically Nov-Feb has the best sea ice conditions for travel.'
	},
	{
		title: 'What should I bring?',
		content: 'A heavy parka, waterproof gloves, and a high-zoom camera. Boots are provided.'
	},
	{
		title: 'How do I make my journey carbon-neutral?',
		content: 'You can purchase carbon credits from your cruise liner.'
	}
];

const options = [
	{
		label: 'Lady in Red',
		value: 'red'
	},
	{
		label: 'Dark Moss',
		value: 'green'
	},
	{
		label: 'Cerulean',
		value: 'blue'
	}
]

export default () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div className="ui container">
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					title="Select Color"
					options={options}
				/>
			) : null}
		</div>
	);
};
