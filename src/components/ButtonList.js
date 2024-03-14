import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const categories = [
    "music",
    "News",
    "Live",
    "Podcast",
    "JavaScript",
    "Public Speaking",
    "Pop Music",
    "Tamil Cinema",
    "Motiavtion",
    "Programming",
  ];
  return (
    <div className="flex gap-3 m-5 justify-center">
      {categories.map((category) => (
        <Button name={category} key={category} />
      ))}
    </div>
  );
};

export default ButtonList;
