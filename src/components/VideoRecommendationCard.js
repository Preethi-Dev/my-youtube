import React, { useEffect, useState } from "react";
import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarYears,
  parseISO,
} from "date-fns";
import { YOUTUBE_CHANNEL_BY_ID } from "../utils/constants";

const VideoRecommendationCard = ({ data }) => {
  const [channelInfo, setChannelInfo] = useState(null);
  const { snippet } = data;
  const {
    title,
    description,
    thumbnails,
    publishTime,
    channelTitle,
    channelId,
  } = snippet;
  const { url } = thumbnails.medium;
  const date = parseISO(publishTime);
  const currentDate = new Date();

  const monthsAgo = differenceInCalendarMonths(currentDate, date);

  useEffect(() => {
    fetchChannelInfo();
  }, []);

  const fetchChannelInfo = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_BY_ID + channelId);
    const json = await data.json();
    const { items } = json;
    setChannelInfo(items[0].snippet.thumbnails.default.url);
  };

  return (
    <div className="flex gap-4 m-2 p-2 items-start">
      <img src={url} alt="thumbnail" className="rounded-md w-2/6" />
      <div className="w-4/6">
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-sm">
          {monthsAgo < 1
            ? `${differenceInCalendarDays(currentDate, date)} days ago`
            : monthsAgo >= 12
            ? `${differenceInCalendarYears(currentDate, date)} years ago`
            : `${monthsAgo} months ago`}
        </p>

        <div className="flex items-center gap-1 py-2">
          {channelInfo && (
            <img
              src={channelInfo}
              className="w-6 rounded-full"
              alt="channel_thumbnail"
            />
          )}
          <p className="text-xs">{channelTitle}</p>
        </div>

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VideoRecommendationCard;
