import React, { useEffect, useState } from "react";
import "./UserSection.css";
import { data } from "../../utils/UserCardDetails";
import UserCard from "./UserCard";
import useWindowDimensions from "../hooks/UseDimensions";

const UserSection = () => {
  const [userdata, setUserData] = useState(data);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [leftBtnDisable, setLeftBtnDisable] = useState(false);
  const [rightBtnDisable, setRightBtnDisable] = useState(false);
  const { height, width } = useWindowDimensions();
  const [preWidth, setPreWidth] = useState(1600);

  const handleSlider = (position) => {
    if (position === "left") {
      setSliderPosition((pre) => pre + 100);
    } else {
      setSliderPosition((pre) => pre - 100);
    }
  };

  const handleShowMore = (id) => {
    let userData = userdata.find((val) => val.id === id);
    userData.showMore = !userData.showMore;
    let updatedata = [
      ...userdata.slice(0, id - 1),
      userData,
      ...userdata.slice(id),
    ];
    setUserData(updatedata);
  };

  const leftBtnDisablity = () => {
    if (sliderPosition === 0) {
      setLeftBtnDisable(true);
    } else {
      setLeftBtnDisable(false);
    }
  };

  const rightBtnDisablity = () => {
    if (preWidth === 1600) {
      if (sliderPosition <= -200) {
        setRightBtnDisable(true);
      } else {
        setRightBtnDisable(false);
      }
    }
    if (preWidth === 1000) {
      if (sliderPosition <= -500) {
        setRightBtnDisable(true);
      } else {
        setRightBtnDisable(false);
      }
    }
  };

  const SliderPostionChangeHandler = () => {
    if (width <= 1000 && preWidth === 1600) {
      setSliderPosition((pre) => 0);
      setPreWidth(1000);
    } else if (width > 1000 && preWidth === 1000) {
      setPreWidth(1600);
      setSliderPosition((pre) => 0);
    }
  };

  useEffect(() => {
    SliderPostionChangeHandler();
    leftBtnDisablity();
    rightBtnDisablity();
    // eslint-disable-next-line 
  }, [sliderPosition, width, height]);

  return (
    <div className="user-background">
      <div className="container user_container">
        <header className="user_header">
          <h1>Our Users Are Being Hired at the World's Leading Companies.</h1>
          <span></span>
        </header>

        <main className="user_main">
          <button
            onClick={() => handleSlider("left")}
            className={`left_arrow ${leftBtnDisable && "btn_disable"}`}
            disabled={leftBtnDisable}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <div className="slider_container">
            <div className="slider" style={{ left: `${sliderPosition}%` }}>
              {userdata &&
                userdata.map((user) => {
                  return (
                    <UserCard
                      key={user.id}
                      user={user}
                      handleShowMore={handleShowMore}
                    />
                  );
                })}
            </div>
          </div>
          <button
            onClick={() => handleSlider("right")}
            className={`right_arrow ${rightBtnDisable && "btn_disable"}`}
            disabled={rightBtnDisable}
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </main>
      </div>
    </div>
  );
};

export default UserSection;
