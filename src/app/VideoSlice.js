import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  show: false,
};


const VideoSlice = createSlice({
  name: "videoAd",
  initialState,
  reducers: {
    showVideo:(state, action)=> {
      state.show = true;
    },
    closeVideo: (state, action) => {
      state.show = false;
    },
  },
});

export const { showVideo, closeVideo } = VideoSlice.actions;

export const ShowVideoAdSelector = (state) => state.videoAd.show;

export default VideoSlice;
