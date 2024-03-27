import React from "react";

const ChatMessage = ({ name, message, avatar }) => {
  return (
    <div className="flex gap-2 items-center my-2">
      <img className="h-8" src={avatar} alt="user avatar" />
      <p className="font-semibold capitalize">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
