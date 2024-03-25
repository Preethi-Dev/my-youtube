const YOUTUBE_API_KEY = "AIzaSyCwIIAj6FYJeNQ3lAlTGq8zHWf3gPh-rQ4";
export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDOE_LIST_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  YOUTUBE_API_KEY +
  "&q=";

export const YOUTUBE_CHANNEL_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const YOUTUBE_COMMENTS_BY_VIDEO_ID =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  YOUTUBE_API_KEY +
  "&videoId=";
