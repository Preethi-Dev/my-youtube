import React from "react";

const Comment = ({ data }) => {
  const { replies } = data;
  const {
    authorDisplayName: name,
    textOriginal: text,
    authorProfileImageUrl,
  } = data?.snippet?.topLevelComment?.snippet || data?.snippet;
  return (
    <div className="flex items-start gap-3 m-2 py-2">
      <img
        className="w-10 h-10 rounded-full"
        src={authorProfileImageUrl}
        alt="profile"
      />
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p>{text}</p>
        <p
          className="font-bold cursor-pointer"
          onClick={(e) => {
            const replies =
              e.currentTarget.parentElement.parentElement.parentElement
                .lastElementChild;
            replies.classList.toggle("hidden");
          }}
        >
          {`Replies ${
            replies && replies.comments.length !== 0
              ? `(${replies.comments.length})`
              : ""
          }`}
        </p>
      </div>
    </div>
  );
};

export default Comment;
