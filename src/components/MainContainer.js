import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import classnames from "classnames";

const MainContainer = () => {
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);

  return (
    <div className={classnames("mt-24", { "ml-48": isMenuOpen })}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
