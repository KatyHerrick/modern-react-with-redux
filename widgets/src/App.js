import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

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
		label: 'Gentoo penguin',
		value: 'gentoo-penguin'
	},
	{
		label: 'Weddell seal',
		value: 'weddell-seal'
	},
	{
		label: 'Wandering albatross',
		value: 'wandering-albatross'
	}
];

export default () => {
	const [selected, setSelected] = useState(0);
	return (
		<div className="ui container">
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/search'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					label="Select an Antarctic animal"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};
