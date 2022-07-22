import React from "react";
import "./videoSection.css";
import VideoImg from "../../assets/video_img.webp";
import VideoCMPImg from "../../assets/video_img.webp";
import { BsPlayFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { showVideo } from "../../app/VideoSlice";
import UseLazyLoad from "../../hooks/UseLazyLoad";

const VideoSection = () => {
  const dispatch = useDispatch();

  return (
    <div className={`container video_container`}>
      <div className="videoSection_header">
        <h1>Recruiters Love Our Resume Builder. Learn Why Below.</h1>
        <p>P.S. The video is less than 2 minutes</p>
        <button  onClick={() => dispatch(showVideo({}))}>Play video</button>
      </div>
      <div className="videoWrapper" onClick={() => dispatch(showVideo({}))}>
        <UseLazyLoad src={VideoImg} alt="video_img" data_src={VideoCMPImg} />
        <span className="play_buttton_icon">
          <BsPlayFill />
        </span>
      </div>
    </div>
  );
};

export default VideoSection;
