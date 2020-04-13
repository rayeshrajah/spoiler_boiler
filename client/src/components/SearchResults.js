import React from "react";
import ReactPlayer from "react-player";
import '../styles/SearchResults.scss'

export default function SearchResults(props) {
  let regex = new RegExp(props.results, "i");
  let videoData = props.videosApi;
  let sortedVideosByName = [];
  videoData.forEach((element) => {
    if (regex.test(element.name)) {
      sortedVideosByName.push(element.video_url);
    }
  });
  
  const videoList =sortedVideosByName.map((video) => {
    return (<ReactPlayer 
             url={video}
             height='20%'
             width='30%'
                 
             />)
  });
  return(<ul className="video-list">{videoList}</ul>)
}
