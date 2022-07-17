import React from "react";

const UserCard = ({ user, handleShowMore }) => {
  return (
    <div
      className="card"
      style={{ maxHeight: `${user.showMore ? "fit-content" : "57rem"}` }}
    >
      <header className="card-header">
        <figure>{<img src={user.image} alt={`usr_image${user.id}`} />}</figure>

        <div className="header_name_descrip">
          <h2 className="user-name">{user.name}</h2>
          <p className="title">{user.role}</p>
        </div>
      </header>
      <div className="card_middle">
        <div className="line"></div>
        <div className="comm">“”</div>
        <div className="line"></div>
      </div>
      <div className="card_bottom">
        <p
          className={`${user.showMore ? "" : "show-active"} `}
          style={{ maxHeight: `${user.showMore ? "unset" : "15rem"}` }}
        >
          {user.description}
        </p>
      </div>
      <p onClick={() => handleShowMore(user.id)}>
        {user.showMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default UserCard;
