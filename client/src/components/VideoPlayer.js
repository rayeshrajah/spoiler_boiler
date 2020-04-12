import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/VideoPlayer.scss'
import Comments from './Comments'
 
function VideoPlayer(props) {
  const [progress, setProgress] = useState("")
  const [progressInSeconds, setProgressInSeconds] = useState(0)
  const [timestamp, setTimestamp] = useState(props.commentTimestamps)
  const [videoDuration, setVideoDuration] = useState(0)
  const reactPlayerLib = useRef(null)

  // ================ stuff for videoplayer component below =========
  
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

  // ================ stuff for VideoPlayer component avove =========
  // ================ stuff for Comments component below ============
  
  function getAllCommentMessagesByVideoId(id) {
    let output = [];
    for (let i = 0; i < props.commentsApiData.length; i++) {
      if (props.commentsApiData[i].video_id === id) {
        let commentAndTimestamp = {
          comment: props.commentsApiData[i].message,
          timestamp: props.commentsApiData[i].timestamp_in_seconds
        }
        output.push(commentAndTimestamp)
      }
    }
    return output
  }

  // for testing purposes (harcoded to get comments from video_id 2)
  let messagesFromVideo2 = getAllCommentMessagesByVideoId(2)

  // ================ stuff for Comments component above ============

  function retrieveKeysFromOnProgress(obj) {
    setProgress(Math.floor(obj.played * 100) + "%")
    setProgressInSeconds(Math.floor(obj.playedSeconds))
  }
  
  return (
    <div className="video-master">
      <div className="video-container">
        <ReactPlayer
          ref={reactPlayerLib}
          className="video" 
          url={props.videosApiData[1].video_url} 
          playing 
          controls
          onProgress={(obj) => retrieveKeysFromOnProgress(obj)}
          onDuration={(duration) => setVideoDuration(duration)}
          volume="0"
        />
      </div>

      <div className="spoiler-timebar-master">
        <div className="spoiler-bar">
          <div className="spoiler-time" style={{width: String(progress)}}>
            {htmlForCommentTimestamps}
          </div>
        </div>
      </div>

      <Comments messages={messagesFromVideo2} progressInSeconds={progressInSeconds}/>
    </div>
  )
}

export default VideoPlayer