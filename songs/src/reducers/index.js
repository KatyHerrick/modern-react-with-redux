import { combineReducers } from 'redux';

// This reducer is unusual because it does not take an action
// and only returns data.
const songsReducer = () => {
	return [
		{ title: 'Semi-Charmed Life', duration: '4:28' },
		{ title: 'Say My Name', duration: '4:31' },
		{ title: 'Crazy', duration: '3:02' },
		{ title: "Hit 'Em up Style (Oops!)", duration: '4:10'}
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});