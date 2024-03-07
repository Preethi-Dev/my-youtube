import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  //subscribe to store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-6 w-48 shadow-lg h-screen">
      <ul>
        <li>Home</li>
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
