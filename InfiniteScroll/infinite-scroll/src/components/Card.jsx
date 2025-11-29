import React from "react";

const Card = ({ data }) => {
  const { id, title, body } = data;
  return (
    <div>
      <li className="bg-gray-700 p-3 flex flex-col gap-1 text-gray-300 rounded-md">
        <p className="bg-yellow-200 text-gray-800 rounded-full w-7 h-7 flex items-center justify-center">
          {id}
        </p>
        <p>
          <span className="text-orange-600">Title: </span>
          {title}
        </p>
        <p>
          <span className="text-orange-600">Body: </span>
          {body}
        </p>
      </li>
    </div>
  );
};

export default Card;
