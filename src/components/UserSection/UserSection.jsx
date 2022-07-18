import React, { useState } from "react";
import "./UserSection.css";
import { data } from "../../utils/UserCardDetails";
import UserCard from "./UserCard";

const UserSection = () => {
  const [userdata, setUserData] = useState(data);
  const [sliderPosition, setSliderPosition] = useState(0);

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

  return (
    <div className="user-background">
      <div className="container user_container">
        <header className="user_header">
          <h1>Our Users Are Being Hired at the World's Leading Companies.</h1>
          <span></span>
        </header>

        <main className="user_main">
          <button onClick={() => handleSlider("left")} className="left_arrow">
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
          <button onClick={() => handleSlider("right")} className="right_arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </main>
      </div>
    </div>
  );
};

export default UserSection;
