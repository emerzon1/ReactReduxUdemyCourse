import { combineReducers } from "redux";
import faker from "faker";
let res = [];
for (let i = 0; i < 15; i++) {
    res.push({
        title: faker.random.words(),
        duration:
            (faker.random.number() % 10) +
            1 +
            ":" +
            (faker.random.number() % 100),
    });
}

const songsReducer = () => {
    return res;
};
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};
export default combineReducers({
    songs: songsReducer,
    selectedSongKey: selectedSongReducer,
});
