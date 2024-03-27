import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsList from "./CommentsList";
import { YOUTUBE_COMMENTS_BY_VIDEO_ID } from "../utils/constants";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);
  const [commentsData, setCommentsData] = useState(null);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCommentThreads();
    dispatch(closeMenu());
  }, []);

  const fetchCommentThreads = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_BY_VIDEO_ID + searchParams.get("v")
    );
    const json = await data.json();
    setCommentsData(json.items);
  };

  return (
    <div className="flex flex-col w-full">
      <div className={classnames("mt-24", { "ml-48": isMenuOpen })}>
        <div className="flex">
          <div>
            <iframe
              className="p-3"
              width="1400"
              height="720"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <LiveChat />
        </div>

        {commentsData && (
          <div className="m-2 p-2">
            <h3 className="font-bold text-xl">{`Comments (${commentsData.length})`}</h3>
            <div>
              {console.log(commentsData)}
              <CommentsList comments={commentsData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
