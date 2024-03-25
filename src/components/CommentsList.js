import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />

      <div className="ml-8 border-l-black hidden">
        {comment.replies && (
          <CommentsList comments={comment.replies.comments} />
        )}
      </div>
    </div>
  ));
};

export default CommentsList;
