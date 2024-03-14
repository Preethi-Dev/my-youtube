import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  //subscribe to store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-6 mt-24 min-w-48 fixed shadow-lg h-screen">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold mt-8 mb-1">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-8 mb-1">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
