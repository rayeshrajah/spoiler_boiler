import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/VideoPlayer.scss'
 
function VideoPlayer(props) {
  const [progress, setProgress] = useState("")
  const [timestamp, setTimestamp] = useState(props)
  const reactPlayerLib = useRef(null)

  // console.log(props)

  return (
    <div className="video-master">
      <div className="video-container">
        <ReactPlayer
          ref={reactPlayerLib}
          className="video" 
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
          playing 
          controls
          onProgress={(obj) => setProgress(Math.floor(obj.played * 100) + "%")}
          onDuration={(duration) => console.log(duration)}
        />
      </div>
      <div className="spoiler-timebar-master">
        <div className="spoiler-bar">
          <div className="spoiler-time" style={{width: String(progress)}}></div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default VideoPlayer