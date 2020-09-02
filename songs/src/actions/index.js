// Action creators return an action object with at least a type property
export const selectSong = (song) => {
	return {
		type: "SONG_SELECTED",
		payload: song
	}
}

