import React from 'react';
import parse from 'html-react-parser';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{parse(video.snippet.title)}</h4>
				<p>{parse(video.snippet.description)}</p>
			</div>
		</div>
	);
}

export default VideoDetail;