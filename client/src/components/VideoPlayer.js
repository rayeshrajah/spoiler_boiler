import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/VideoPlayer.scss'
 
function VideoPlayer(props) {
  const [progress, setProgress] = useState("")
  const [timestamp, setTimestamp] = useState(props.commentTimestamps)
  const [videoDuration, setVideoDuration] = useState(0)
  const reactPlayerLib = useRef(null)

  function getCommentTimestampsByVideoId(id) {
    let output = [];
    for (let i = 0; i < props.commentsApiData.length; i++) {
      if (props.commentsApiData[i].video_id === id) {
        output.push(props.commentsApiData[i].timestamp_in_seconds)
      }
    }
    return output
  }

  // for testing purposes (harcoded to get comments from video_id 2)
  let timestampsForVideo = getCommentTimestampsByVideoId(2)

  let htmlForCommentTimestamps = timestampsForVideo.map(timestamp => {
    return (
      <div key={timestamp} className="comment-ticks" style={{left: String(Math.floor((timestamp / videoDuration) * 100) + "%")}}></div>
    )
  })

  return (
    <div className="video-master">
      <div className="video-container">
        <ReactPlayer
          ref={reactPlayerLib}
          className="video" 
          url={props.videosApiData[1].video_url} 
          playing 
          controls
          onProgress={(obj) => setProgress(Math.floor(obj.played * 100) + "%")}
          onDuration={(duration) => setVideoDuration(duration)}
        />
      </div>
      <div className="spoiler-timebar-master">
        <div className="spoiler-bar">
          <div className="spoiler-time" style={{width: String(progress)}}>
            {htmlForCommentTimestamps}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer