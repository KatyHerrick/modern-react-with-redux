import React from 'react';
import parse from 'html-react-parser';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className='video-item item'>
			<img
				alt={parse(video.snippet.title)}
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">{parse(video.snippet.title)}</div>
			</div>
		</div>
	);
}

export default VideoItem;