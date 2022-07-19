import { configureStore } from "@reduxjs/toolkit";
import VideoSlice from "../app/VideoSlice";

export const store = configureStore({
    reducer:{
        videoAd:VideoSlice.reducer
    }
})