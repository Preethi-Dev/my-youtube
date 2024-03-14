import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  //dispatch
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg items-center fixed w-full bg-white">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="menu"
        />
        <img
          className="h-16"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="logo"
        />
      </div>
      <div className="col-span-10 w-3/4 justify-self-center flex">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 py-2 px-4 border border-gray-400 rounded-l-full "
        />
        <button className="py-2 px-4 border border-gray-400 rounded-r-full">
          <img
            className="w-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2T3nN7X9hI953BvBfAiJ4dxhEC9kisPPgVuGpIDJgekeisFxwWoKLTIxhaYuaiUiyJ0&usqp=CAU"
            alt="search icon"
          />
        </button>
      </div>
      <div className="col-span-1 justify-self-center">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default Head;
