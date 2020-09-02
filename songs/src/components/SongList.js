import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div key={song.title} className="item">
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui divided list">
				{this.renderList()}
			</div>
		);
	}
}

// "mapStateToProps" is a community convention name
const mapStateToProps = (state) => {
	return { songs: state.songs };
};

// Map state to props in first arg,
// map actions to props in second arg.
export default connect(
	mapStateToProps,
	{ selectSong }
)(SongList);
