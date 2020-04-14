import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/SearchResults.scss";

export default function SearchResults(props) {
  


  //Using regular expression to narrow down results
  let regex = new RegExp(props.results, "i");
  let videoData = props.videosApi;

  function focusVideo(video) {
    props.focusedVideo(video.video_url);
    props.videoIdFocused(video.id);
    props.setShow(false);
  }

  //Mapping through each video api
  const videoList = videoData.map((video, index) => {
    if (props.results === video.video_url) {
      return (
        <div 
          className="video-item"
          key={index}
        >
        <ReactPlayer
          key={video.id}
          url={video.video_url}
          height="100%"
          width="100%"
          light={true}
          onClick={() => focusVideo(video)}
        />
        </div>
      )
    } else if (regex.test(video.name)) {
      return (
        <div 
          className="video-item"
          key={index}
        >
        <ReactPlayer
          key={video.id}
          url={video.video_url}
          height="100%"
          width="100%"
          light={true}
          onClick={() => focusVideo(video)}
        />
        </div>
      );
    }
  });

  return (
    <div className="video-list">{props.show && videoList}</div>
  )
}
