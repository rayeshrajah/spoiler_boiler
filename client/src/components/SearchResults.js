import React from "react";
import ReactPlayer from "react-player";
import "../styles/SearchResults.scss";

export default function SearchResults(props) {
  //Using regular expression to narrow down results
  let regex = new RegExp(props.results, "i");
  let videoData = props.videosApi;
  //Mapping through each video api
  const videoList = videoData.map((video) => {
    if (regex.test(video.name)) {
      return (
        <div className = "video-item">
        <ReactPlayer
          key={video.id}
          url={video.video_url}
          height="100%"
          width="100%"
        />
        </div>
      );
    }
  });
  return <div className="video-list">{videoList}</div>;
}
