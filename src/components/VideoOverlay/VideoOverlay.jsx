import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { closeVideo } from "../../app/VideoSlice";
import "./VideoOverlay.css";
import VideoPoster from "../../assets/video_pic.webp"

const VideoOverlay = () => {
  let videoRef = useRef(null);

  const dispatch= useDispatch()

  return (
    <div className="video_overlay_container">
      <div className="close_btn" onClick={()=>dispatch(closeVideo())}>
        <ion-icon name="close-outline"></ion-icon>
      </div>

      <div className="video_overlaywrapper_container">
        <video
          ref={videoRef}
          controls
          loop
          data-play="Hover"
          preload="auto"
          poster={VideoPoster}
          muted="muted"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoOverlay;

