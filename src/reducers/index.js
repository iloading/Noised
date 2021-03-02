import { combineReducers } from "redux";
import homeReducer from "./HomeReducer";
import mediaDataReducer from "./mediaDataReducer";
import queueReducer from "./queueReducer";
import currentTrackReducer from "./CurrentTrackReducer";
import settingsReducer from "./settingsReducer";
import searchReducer from "./searchReducer";

const rootReducers = combineReducers({
  home: homeReducer,
  mediaData: mediaDataReducer,
  queue: queueReducer,
  currentTrack: currentTrackReducer,
  settings: settingsReducer,
  search: searchReducer,
});

export default rootReducers;
