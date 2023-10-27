import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { name, email, department, profilePic, cardColor, story, heading } = props;

  return (
    <div className={`rounded-lg shadow-md p-4 m-4 max-w-sm ${cardColor} w-96 h-64 card`}>
      <div className="text-center ">
        <img
          src={profilePic}
          alt={`${name}'s profile`}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{department}</p>
        <p className="text-gray-600">{story}</p>
        <h1 className="text-gray-600">{heading}</h1>
        <Link to={`/MyCard/${name}`} className="text-blue-500 hover:underline cursor-pointer">
          See more...
        </Link>     
         </div>
    </div>
  );
};

export default Card;
