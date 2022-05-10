import React from "react";
import { nanoid } from "nanoid";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value }) => {
  return (
    <div className="rating d-flex flex-row gap-1">
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={nanoid()}>
          {value + 1 === rate + 0.5 ? (
            <FaStarHalfAlt color="#ffa41c" />
          ) : value >= rate ? (
            <FaStar color="#ffa41c" />
          ) : (
            <FaRegStar color="#ffa41c" />
          )}
        </span>
      ))}
      <span>({value})</span>
    </div>
  );
};

export default Rating;
