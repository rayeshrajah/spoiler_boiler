import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/VideoPlayer.scss'
 
function VideoPlayer() {
  const [state, setState] = useState("")
  const reactPlayerLib = useRef(null)

  return (
    <div className="video-master">
      <div className="video-container">
        <ReactPlayer
          ref={reactPlayerLib}
          className="video" 
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
          playing 
          controls
          onProgress={(obj) => setState(Math.floor(obj.played * 100) + "%")}
        />
        {console.log(state)}
      </div>
      <div className="spoiler-timebar-master">
        <div className="spoiler-bar">
          <div className="spoiler-time" style={{width: String(state)}}></div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer