import React from "react";
import "./VideoOverlay.css";

const VideoOverlay = () => {
  return (
    <div className="video_overlay_container">
      <div className="close_btn">
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div className="video_container">
        <iframe
          //   width="860"
          //   height="515"
          src="https://www.youtube.com/embed/7-sE2-ZIz44"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoOverlay;
