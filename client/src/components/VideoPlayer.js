import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/VideoPlayer.scss'
 
function VideoPlayer(props) {
  const [progress, setProgress] = useState("")
  const [timestamp, setTimestamp] = useState(props.commentTimestamps)
  const [videoDuration, setVideoDuration] = useState(0)
  const reactPlayerLib = useRef(null)

  const commentTick = Math.floor((timestamp[1] / videoDuration) * 100) + "%"

  return (
    <div className="video-master">
      <div className="video-container">
        <ReactPlayer
          ref={reactPlayerLib}
          className="video" 
          url='https://www.youtube.com/watch?v=7d7-etf-wNI' 
          playing 
          controls
          onProgress={(obj) => setProgress(Math.floor(obj.played * 100) + "%")}
          onDuration={(duration) => setVideoDuration(duration)}
        />
      </div>
      <div className="spoiler-timebar-master">
        <div className="spoiler-bar">
          <div className="spoiler-time" style={{width: String(progress)}}>
            <div className="comment-ticks" style={{left: String(commentTick)}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer