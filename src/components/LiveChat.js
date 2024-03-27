import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../utils/chatSlice";
import { generateName, generateRandomComment } from "../utils/helper";
import { AvatarGenerator } from "random-avatar-generator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const generator = new AvatarGenerator();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChatMessages({
          name: generateName(),
          message: generateRandomComment(),
          avatar: generator.generateRandomAvatar(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="border border-gray-200 my-3 p-3 h-[700px] w-full rounded-lg">
      <div className="flex flex-col-reverse h-[630px] overflow-y-scroll">
        {chatMessages.map((c, i) => (
          <ChatMessage
            key={i}
            name={c.name}
            message={c.message}
            avatar={c.avatar}
          />
        ))}
      </div>
      <input
        type="text"
        placeholder="Start Live Chat..."
        className="border-b border-b-gray-200 px-8 py-3 w-full"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            dispatch(
              addChatMessages({
                name: "preethi",
                message: e.target.value,
                avatar: generator.generateRandomAvatar(),
              })
            );
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default LiveChat;
