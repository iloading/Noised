import { combineReducers } from "redux";
import homeReducer from "./HomeReducer";
import mediaDataReducer from "./mediaDataReducer";
import queueReducer from "./queueReducer";
import currentTrackReducer from "./CurrentTrackReducer";

const rootReducers = combineReducers({
  home: homeReducer,
  mediaData: mediaDataReducer,
  queue: queueReducer,
  currentTrack: currentTrackReducer,
});

export default rootReducers;
