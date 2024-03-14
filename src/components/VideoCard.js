import React from "react";

const VideoCard = ({ movie }) => {
  const { snippet, statistics } = movie;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-80 py-2">
      <img
        src={thumbnails?.medium?.url}
        alt={title + " thumbnail"}
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-medium">{channelTitle}</li>
        <li className="font-medium">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
