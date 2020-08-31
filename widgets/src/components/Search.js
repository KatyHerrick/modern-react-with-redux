import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('Antarctica');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	// useEffect simulates the componentDidMount() and componentDidUpdate()
	// lifecycle methods.
	// The passed function can return a cleanup function that runs just before
	// the next run.
	// The second arg determines when useEffect occurs:
	// [] = run at initial render
	// no second arg = initial render and after every rerender
	// [data] = initial render and (rerenders IF data changed)
	useEffect(() => {
		// Debounce request
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 500);

		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	// The passed function cannot use the async keyword. React suggests
	// the following work around of defining and invoking an async function.
	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm
				}
			});

			setResults(data.query.search);
		};
		if (debouncedTerm) {
			search();
		}
	}, [debouncedTerm]);

	// Do not use dangerouslySetInnerHTML in production code because
	// it opens the app up to XSS attacks.
	const renderedResults = results.map(result => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						target="_blank"
						className="ui button"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div className="ui container">
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={e => setTerm(e.target.value)}
						className="text"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
}

export default Search;
