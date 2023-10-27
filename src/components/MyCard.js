import React from "react";
import { useParams } from "react-router-dom";

const MyCard = (props) => {
  const { name } = useParams();
  const user = props.users.find((user) => user.name === name);

  if (!user) {
    return <div>User not found</div>;
  }

  const {
    story,
    heading,
    backgroundColor,
    topstory,
    headlines,
    timezone,
    profilePic,
  } = user;

  const aboutStyle = {
    backgroundColor: backgroundColor,
    padding: "20px",
    color: "white",
  };

  return (
    <div
      className="w-full text-center lg:relative lg-left-[400px] lg-w-[80%]"
      style={aboutStyle}
    >
      <div>
        <h1 className="text-2xl lg:text-5xl text-green-400 font-semibold">
          {name}'s Story
        </h1>
      </div>
      <div className="">
        <h1 className="text-sm lg:text-lg font-sm">{timezone}</h1>
      </div>
      <div className="">
        <h1 className="text-5xl lg:text-7xl mt-5 font-semibold">{heading}</h1>
      </div>
      <div className="w-full lg:w-[80%] mx-auto">
        <h3 className="mt-20 font-semibold text-lg lg:text-2xl">{topstory}</h3>
      </div>
      <div className="w-full lg:w-[80%] mx-auto">
        <p className="mt-9 font-light text-lg lg:text-xl">{story}</p>
        <img
          src={profilePic}
          alt={`${name}'s profile`}
          className="w-full h-[50%] lg:w-[80%] lg:h-auto rounded-lg mx-auto mb-4"
        />
        <p className="mt-9 font-light text-lg lg:text-xl">{headlines}</p>
      </div>
    </div>
  );
};

export default MyCard;
