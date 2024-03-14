import React, { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const fetchPopularVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    console.log(json.items);
    dispatch(addPopularMovies(json.items));
  };

  useEffect(() => {
    if (!popularMovies) fetchPopularVideos();
  }, []);

  //early return
  if (!popularMovies) return;

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {popularMovies.map((popularMovie) => (
        <Link to={"/watch?v=" + popularMovie.id} key={popularMovie.id}>
          <VideoCard movie={popularMovie} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
