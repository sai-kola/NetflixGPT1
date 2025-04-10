import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 pr-4 cursor-pointer">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card"  className="transform transition duration-300 hover:scale-105"/>
    </div>
  );
};

export default MovieCard;
