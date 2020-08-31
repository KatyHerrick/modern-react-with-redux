import React from 'react';
import Accordion from './components/Accordion';
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

export default () => {
	return (
		<div>
			<Accordion items={items} />
			<Search />
		</div>
	);
};
