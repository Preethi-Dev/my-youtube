import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDOE_LIST_API } from "../utils/constants";
import VideoRecommendationCard from "./VideoRecommendationCard";
import { Link, useSearchParams } from "react-router-dom";

const VideoRecommendationContainer = () => {
  const [searchTermParam] = useSearchParams();
  const [videosuggestions, setVideoSuggestions] = useState(null);

  useEffect(() => {
    videoSuggestion();
  }, []);

  const videoSuggestion = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_VIDOE_LIST_API +
        searchTermParam.get("search_query").split("+").join(" ")
    );
    const json = await data.json();
    console.log(json.items);
    setVideoSuggestions(json.items);
  };
  return (
    videosuggestions && (
      <div className="flex justify-center w-full">
        <div className="mt-24 ml-48 max-w-[1200px]">
          {videosuggestions.map((suggestion) => {
            return (
              suggestion.id.kind === "youtube#video" && (
                <Link
                  to={"/watch?v=" + suggestion.id.videoId}
                  key={suggestion.etag}
                >
                  <VideoRecommendationCard data={suggestion} />
                </Link>
              )
            );
          })}
        </div>
      </div>
    )
  );
};

export default VideoRecommendationContainer;
