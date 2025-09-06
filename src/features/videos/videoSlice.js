import { createSlice, nanoid } from "@reduxjs/toolkit";
import { convertYouTubeUrlToEmbed } from "../../utils/youtube";


const initialState = {
  list: [
    {
      id: "1",
      name: "Intro to AI in EdTech",
      description: "Understanding AI applications in education",
      url: "https://www.youtube.com/embed/2ePf9rue1Ao",
    },
  ],
  currentVideo: "https://www.youtube.com/embed/2ePf9rue1Ao",
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare({ name, description, url }) {
        return {
          payload: {
            id: nanoid(),
            name,
            description,
            url: convertYouTubeUrlToEmbed(url),
          },
        };
      },
    },
    deleteVideo(state, action) {
      state.list = state.list.filter((video) => video.id !== action.payload);
    },
    setCurrentVideo(state, action) {
      state.currentVideo = action.payload;
    },
  },
});

export const { addVideo, deleteVideo, setCurrentVideo } = videoSlice.actions;
export default videoSlice.reducer;
