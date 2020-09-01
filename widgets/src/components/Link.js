import React from 'react';

const Link = ({ href, className, children}) => {
	const onClick = event => {
		// Checks if the CMD (Mac) or CTRL (Windows) key was held
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		// Prevents a full page reload, but also prevents the URL from changing
		event.preventDefault();

		// Manually keep the URL in sync with the desired path
		window.history.pushState({}, '', href);

		// Tell components the URL changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<a href={href} onClick={onClick} className={className}>
			{children}
		</a>
	);
};

export default Link;